const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let userProfileSchema = new Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
}, {versionKey: false});

module.exports = mongoose.model('User_Profile', userProfileSchema);
