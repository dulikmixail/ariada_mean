const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});


let Ph_R_F_L_I_Title = mongoose.model('Ph_R_F_L_I_Title',phRFLITitleSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_I_Title);
