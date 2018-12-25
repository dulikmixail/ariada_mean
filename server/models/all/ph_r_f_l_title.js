const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLTitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

let Ph_R_F_L_Title = mongoose.model('Ph_R_F_L_Title', phRFLTitleSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_Title);
