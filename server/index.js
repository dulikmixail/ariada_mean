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

const distDir = '../dist/client';


mongoose.then(() => {
  console.log('Database connected.');
});

app.set('port', config.get('server.port') || process.env.PORT || 3000);

// не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'production') {
  // morgan для вывода логов в консоль
  app.use(morgan('combined')); // 'combined' выводит логи в стиле apache
}


app.use(compression());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// secure apps by setting various HTTP headers
app.use(helmet());


if (app.get('env') === 'production' || config.util.getEnv('NODE_ENV') === 'production') {
  app.use(express.static(path.join(__dirname, distDir)));
  app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
  });
}
app.use('/api', router);
app.use(responseHandler);
app.use(errorHandler);


app.listen(app.get('port'), () => {
  console.log(`Server  is running  localhost:${app.get('port')}. (${process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEFAULT'} MODE);`);
});

module.exports = app; // for testing
