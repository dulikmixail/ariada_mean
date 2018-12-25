const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffKIndMeasurementSchema = new Schema({
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
    diastolicPressure: {
        type: Number
    },
    kerdoIndex: {
        type: String
    },
    conclusions: {
        type: String
    },
    recommendation: {
        type: String
    }
}, {versionKey: false});

let Ev_Eff_K_Ind_Measurement = mongoose.model('Ev_Eff_K_Ind_Measurement', evEffKIndMeasurementSchema);
module.exports = require('../../services/crud.service')(Ev_Eff_K_Ind_Measurement);
