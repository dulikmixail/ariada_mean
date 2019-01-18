const express = require('express');
const unless = require('express-unless');
const compression = require('compression')
const path = require('path');
const morgan = require('morgan');
const app = express();
const config = require('config');
const errorHandler = require('./helpers/error-handler');
const responseHandler = require('./helpers/response-handler');
const jwtMiddleware = require('./helpers/jwt');
const mongoose = require('./mongoose-connection');
const mainRouter = require('./routes/main.router');
const authRouter = require('./routes/auth.router');


mongoose.then(() => {
  console.log('Database connected.');
});

app.set('port', config.get('server.port') || process.env.PORT || 3000);

// не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'production') {
  // morgan для вывода логов в консоль
  app.use(morgan('combined')); // 'combined' выводит логи в стиле apache
}
if (app.get("env") === "production" || config.util.getEnv('NODE_ENV') === 'production') {
  app.use(express.static(path.join(__dirname, "../dist/client")));
}

app.use(compression())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use('/', mainRouter);

app.use('/auth', authRouter);
app.use('/api', jwtMiddleware);
app.use('/api', require('./routes/crud_builder.router'));
app.use(responseHandler);
app.use(errorHandler);


app.listen(app.get('port'), () => {
  console.log('Server (' + process.env.NODE_ENV.toUpperCase() + ' MODE) is running  localhost:' + app.get('port'));
});

module.exports = app; // for testing
