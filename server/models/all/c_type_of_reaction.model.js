const mongoose = require('mongoose')
  , Schema = mongoose.Schema;

let cTypeOfReactionSchema = new Schema({
  typesOfReaction: {
    type: String
  },
  recommendations: {
    type: String
  },
}, {versionKey: false});

module.exports = mongoose.model('C_Type_Of_Reaction', cTypeOfReactionSchema);
