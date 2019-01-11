const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLTitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

module.exports = mongoose.model('Ph_R_F_L_Title', phRFLTitleSchema);
