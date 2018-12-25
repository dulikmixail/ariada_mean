const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let measurementSchema = new Schema({
    respiratoryRate: {
        type: String,
        required: true
    },
    systolicPressure: {
        type: Number,
        required: true
    },
    diastolicPressure: {
        type: Number,
        required: true
    },
    heartRate: {
        type: Number,
        required: true
    },
    signsOfFatigue:{
        type: String
    }
}, {versionKey: false});

let Measurement = mongoose.model('Measurement', measurementSchema);
module.exports = require('../../services/crud.service')(Measurement);
