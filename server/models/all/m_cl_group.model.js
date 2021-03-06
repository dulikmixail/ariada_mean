const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let mClGroupSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  classifier: {
    type: [Schema.Types.ObjectId],
    ref: 'M_Classifier'
  },
  children: {
    type: [Schema.Types.ObjectId],
    ref: 'M_Cl_Group'
  }
}, {versionKey: false});


module.exports = mongoose.model('M_Cl_Group', mClGroupSchema);
