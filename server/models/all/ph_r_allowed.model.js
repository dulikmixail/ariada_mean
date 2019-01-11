const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRAllowedSchema = new Schema({
    isAllowed: {
        type: Boolean,
        required: true
    },
    description: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('Ph_R_Allowed', phRAllowedSchema);
