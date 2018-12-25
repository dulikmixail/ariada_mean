const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffOrthTMeasurementSchema = new Schema({
    typeOfLoad: {
        type: String
    },
    signal: {
        type: String
    },
    date: {
        type: Date
    },
    heartRate: {
        type: Number
    },
    systolicPressure: {
        type: Number
    },
    diastolicPressure: {
        type: Number
    },
    pulsePressure: {
        type: Number
    },
    vegetativeReactions: {
        type: String
    }
}, {versionKey: false});

let Ev_Eff_Orth_T_Measurement = mongoose.model('Ev_Eff_Orth_T_Measurement', evEffOrthTMeasurementSchema);
module.exports = require('../../services/crud.service')(Ev_Eff_Orth_T_Measurement);
