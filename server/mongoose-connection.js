const mongooseConnection = require('mongoose');
const db = mongooseConnection.connection;
const config = require('config');

db.once('open', ()=>{
  console.log("Connect to DB " + config.get('DBHost') + " OPEN");
});
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongooseConnection.connect(config.get('DBHost'), {useNewUrlParser: true, keepAlive: 1, connectTimeoutMS: 30000});
