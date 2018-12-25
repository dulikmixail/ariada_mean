const express = require('express');
const morgan = require('morgan');
const app = express();
const config = require('config');
const mongoose = require('./mongoose-connection');
const indexRouter = require('./routes/index.router');
const authRouter = require('./routes/auth.router');


mongoose.then(() => {
  console.log('Server starting...');
});

if (config.util.getEnv('NODE_ENV') === 'test') {
  app.set('port', config.get('server.port'));
} else {
  app.set('port', process.env.PORT || 3000);
}

// не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'test') {
  // morgan для вывода логов в консоль
  app.use(morgan('combined')); // 'combined' выводит логи в стиле apache
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());


function getRouters() {
  const crudRouters = [
    'assessment_of_functional_capability', '/assessment_of_functional_capabilities',
    'branch', '/branches',
    'employee', '/employees',
    'post', '/posts',
    'exercise_therapy_and_mechanotherapy_item', '/exercise_therapy_and_mechanotherapy_items',
    'user', '/users'
  ];
  const routers = [];
  for (let i = 0; i < crudRouters.length; i += 2) {
    routers.push(require('./routes/crud.router')(crudRouters[i], crudRouters[i + 1]));
  }
  return routers;
}

app.use('/', indexRouter);
app.use('/api', getRouters());
app.use('/api/auth', authRouter);

app.listen(app.get('port'), () => {
  console.log('Server is running localhost:' + app.get('port') + '. Go go next!');
});

module.exports = app; // for testing
