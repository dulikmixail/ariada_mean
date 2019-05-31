const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let chamberSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  beds: {
    type: [Schema.Types.ObjectId],
    ref: 'Bed'
  },
  full: {
    type: Boolean,
    default: false
  }
}, {versionKey: false});

module.exports = mongoose.model('Chamber', chamberSchema);
