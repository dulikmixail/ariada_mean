const mongoose = require('mongoose')
  , Schema = mongoose.Schema;
//Впервые / повторно
let howIncomingSchema = new Schema({
  title: {
    type: String,
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('How_Incoming', howIncomingSchema);
