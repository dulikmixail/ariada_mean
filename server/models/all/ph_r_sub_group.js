const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRSubGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Ph_R_Sub_Group = mongoose.model('Ph_R_Sub_Group', phRSubGroupSchema);
module.exports = require('../../services/crud.service')(Ph_R_Sub_Group);
