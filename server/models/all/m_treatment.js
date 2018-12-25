const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

    let mTreatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: [Number],
        required: true
    }

}, {versionKey: false});

let M_Treatment = mongoose.model('M_Treatment', mTreatmentSchema);
module.exports = require('../../services/crud.service')(M_Treatment);
