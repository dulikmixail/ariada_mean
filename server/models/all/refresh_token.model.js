const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let refreshTokenSchema = new Schema({
  token: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

}, {versionKey: false});

module.exports = mongoose.model('Refresh_Token', refreshTokenSchema);
