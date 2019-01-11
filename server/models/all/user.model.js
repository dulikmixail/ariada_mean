const mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

let userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  key: {
    type: Buffer,
    required: true
  }
}, {versionKey: false});

userSchema.plugin(deepPopulate);

module.exports = mongoose.model('User', userSchema);
