const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

module.exports = mongoose.model('M_Cl_Value', mClValueSchema);
