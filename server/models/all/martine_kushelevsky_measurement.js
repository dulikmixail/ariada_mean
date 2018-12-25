const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let martineKushelevskyMeasurementSchema = new Schema({
    heartRate1min: {
        type: Number
    },
    heartRate2min: {
        type: Number
    },
    heartRate3min: {
        type: Number
    },
    systolicPressure1min: {
        type: String
    },
    systolicPressure3min: {
        type: String
    },
    diastolicPressure1min: {
        type: String
    },
    diastolicPressure3min: {
        type: String
    },
    pulsePressure1min: {
        type: String
    },
    pulsePressure3min: {
        type: String
    }
}, {versionKey: false});


let Martine_Kushelevsky_Measurement = mongoose.model('Martine_Kushelevsky_Measurement', martineKushelevskyMeasurementSchema);
module.exports = require('../../services/crud.service')(Martine_Kushelevsky_Measurement);
