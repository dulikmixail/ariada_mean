const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let departmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  full: {
    type: Boolean,
    default: false
  }
}, {versionKey: false});

module.exports = mongoose.model('Department', departmentSchema);
