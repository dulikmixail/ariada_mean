const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let rehabilitationCardSchema = new Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  records: {
    type: [Schema.Types.ObjectId],
    ref: 'RC_Records'
  },
  historyIncoming: {
    type: [Schema.Types.ObjectId],
    ref: 'History_Incoming'
  }

}, {versionKey: false});

module.exports = mongoose.model('Rehabilitation_Card', rehabilitationCardSchema);
