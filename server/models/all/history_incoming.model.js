const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let historyIncomingSchema = new Schema({
  hospitalizationDate: {
    type: Date,
    required: true
  },
  senderMedicalFacility: {
    type: String,
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  finalDiagnosis: {
    type: String
  },
  howIncoming: {
    type: Schema.Types.ObjectId,
    ref: 'How_Incoming',
  },
  issuanceDate: {
    type: Date
  },
  typeIncoming: {
    type: Schema.Types.ObjectId,
    ref: 'Type_Incoming',
  },
  note: {
    type: String,
  },
  examination: {
    type: [Schema.Types.ObjectId],
    ref: 'Examination'
  },
  placement: {
    type: [Schema.Types.ObjectId],
    ref: 'Placement'
  }
}, {versionKey: false});

module.exports = mongoose.model('History_Incoming', historyIncomingSchema);
