const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let placementCardSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  },
  chamber: {
    type: Schema.Types.ObjectId,
    ref: 'Chamber'
  },
  bed: {
    type: Schema.Types.ObjectId,
    ref: 'Bed'
  }

}, {versionKey: false});

module.exports = mongoose.model('Placement', placementCardSchema);
