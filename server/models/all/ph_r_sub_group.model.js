const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRSubGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Ph_R_Sub_Group', phRSubGroupSchema);
