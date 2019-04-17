const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let examinationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  report: {
    type: String
  },
  use: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  executor: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  treatmentProgram: {
    type: Schema.Types.ObjectId,
    ref: 'Treatment_Program'
  },
  records: {
    type: [Schema.Types.ObjectId],
    ref: 'RC_Records'
  }
}, {versionKey: false});

module.exports = mongoose.model('Examination', examinationSchema);
