const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let bedSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  chamber: {
    type: Schema.Types.ObjectId,
    ref: 'Chamber',
    required: true
  },
  occupied: {
    type: Boolean,
    default: false
  }
}, {versionKey: false});

module.exports = mongoose.model('Bed', bedSchema);
