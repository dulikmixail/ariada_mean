const express = require('express');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const config = require('config');

const errorHandler = require('./helpers/error-handler');
const responseHandler = require('./helpers/response-handler');
const mongoose = require('./mongoose-connection');
const router = require('./routes/index.router');
const uploadRouter = require('./routes/uploads.router');

const distDir = '../dist/client';

app.set('port', config.get('server.port') || process.env.PORT || 3000);

// не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'production') {
  // morgan для вывода логов в консоль
  app.use(morgan('combined')); // 'combined' выводит логи в стиле apache
}

app.use(compression());
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
// secure apps by setting various HTTP headers
app.use(helmet());


if (app.get('env') === 'production' || config.util.getEnv('NODE_ENV') === 'production') {
  console.log('Static files: ', path.join(__dirname, distDir));
  app.use(express.static(path.join(__dirname, distDir)));
  app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
  });
}

app.use('/api', uploadRouter);
app.use('/api', router);
app.use(responseHandler);
app.use(errorHandler);

mongoose.connect.then(() => {
  console.log('Database connected.');
  const server = app.listen(app.get('port'), () => {
    console.log(`Server  is running  localhost:${app.get('port')}. (${process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEFAULT'} MODE);`);
  });
  server.setTimeout(5000);
});


module.exports = app; // for testing
