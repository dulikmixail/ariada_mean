const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let patientSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  permanentResidence: {
    type: String
  },
  addressOfRelativesAndFamily: {
    type: String
  },
  phoneNumbers: {
    type: [String],
    required: true
  },
  medicalCardNumber: {
    type: String
  },
  workplace: {
    type: String
  },
  workPost: {
    type: String
  },
  isDelete: {
    type: Boolean
  },
  gender: {
    type: Schema.Types.ObjectId,
    ref: 'Gender',
    required: true
  },
  photo: {
    type: String
  }
}, {versionKey: false});


module.exports = mongoose.model('Patient', patientSchema);
