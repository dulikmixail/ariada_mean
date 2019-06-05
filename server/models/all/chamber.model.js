const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let chamberSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  full: {
    type: Boolean,
    default: false
  }
}, {versionKey: false});

module.exports = mongoose.model('Chamber', chamberSchema);
