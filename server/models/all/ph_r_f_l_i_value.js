const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLIValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});


let Ph_R_F_L_I_Value = mongoose.model('Ph_R_F_L_I_Value',phRFLIValueSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_I_Value);
