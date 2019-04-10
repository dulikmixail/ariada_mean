const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let treatmentProgramSchema = new Schema({
  physicalRehabilitation: {
    type: [Schema.Types.ObjectId],
    ref: 'Physical_Rehabilitation',
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('Treatment_Program Prescribed_Treatment', treatmentProgramSchema);
