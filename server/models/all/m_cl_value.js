const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});


let M_Cl_Value = mongoose.model('M_Cl_Value', mClValueSchema);
module.exports = require('../../services/crud.service')(M_Cl_Value);
