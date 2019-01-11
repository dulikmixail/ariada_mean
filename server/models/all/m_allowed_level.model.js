const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedLevelSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('M_Allowed_Level', mAllowedLevelSchema);
