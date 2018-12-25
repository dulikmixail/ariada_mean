const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let treatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = require('../../services/crud.service')(Treatment);
