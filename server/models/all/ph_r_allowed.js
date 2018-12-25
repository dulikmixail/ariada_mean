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

let Ph_R_Allowed = mongoose.model('Ph_R_Allowed', phRAllowedSchema);
module.exports = require('../../services/crud.service')(Ph_R_Allowed);
