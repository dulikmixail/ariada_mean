const mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

let userSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {versionKey: false});

userSchema.plugin(deepPopulate);

let User = mongoose.model('User', userSchema);
module.exports = require('../../services/crud.service')(User);
