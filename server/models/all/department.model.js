const mongoose = require('mongoose')
  , Schema = mongoose.Schema;


let departmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  chambers: {
    type: [Schema.Types.ObjectId],
    ref: 'Chamber'
  }
}, {versionKey: false});

module.exports = mongoose.model('Department', departmentSchema);
