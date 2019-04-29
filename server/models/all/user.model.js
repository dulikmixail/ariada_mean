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
  },
  userProfile: {
    type: Schema.Types.ObjectId,
    ref: 'User_Profile'
  }
}, {versionKey: false});

userSchema.plugin(deepPopulate);

module.exports = mongoose.model('User', userSchema);
