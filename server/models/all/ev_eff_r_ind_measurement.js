const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffRIndMeasurementSchema = new Schema({
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
    robinsonIndex: {
        type: String
    },
    conclusions: {
        type: String
    },
    recommendation: {
        type: String
    }
}, {versionKey: false});

let Ev_Eff_R_Ind_Measurement = mongoose.model('Ev_Eff_R_Ind_Measurement', evEffRIndMeasurementSchema);
module.exports = require('../../services/crud.service')(Ev_Eff_R_Ind_Measurement);
