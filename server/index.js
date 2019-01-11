const express = require('express');
const morgan = require('morgan');
const app = express();
const config = require('config');
const errorHandler = require('./helpers/error-handler');
const jwtMiddleware = require('./helpers/jwt');
const mongoose = require('./mongoose-connection');
const mainRouter = require('./routes/main.router');
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

app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/api', jwtMiddleware);
app.use('/api', require('./routes/crud_builder.router'));
app.use(errorHandler);


app.listen(app.get('port'), () => {
  console.log('Server is running localhost:' + app.get('port') + '. Go go next!');
});

module.exports = app; // for testing
