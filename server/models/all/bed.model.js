const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let bedSchema = new Schema({
  title: {
    type: String,
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('Bed', bedSchema);
