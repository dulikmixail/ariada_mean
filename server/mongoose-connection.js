const mongoose = require('mongoose');
const conn = mongoose.connection;
const config = require('config');

conn.once('open', ()=>{
  console.log("Connect to DB " + config.get('DBHost') + " OPEN");
});
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports.connect = mongoose.connect(config.get('DBHost'), {useNewUrlParser: true, useCreateIndex: true, keepAlive: 1, connectTimeoutMS: 30000});
module.exports.connection = conn;
module.exports.mongo = mongoose.mongo;
