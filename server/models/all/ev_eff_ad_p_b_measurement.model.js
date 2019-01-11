const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffAdPBMeasurementSchema = new Schema({
    typeOfLoad: {
        type: String
    },
    signal: {
        type: String
    },
    date: {
        type: Date
    },
    age: {
        type: Number
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender'
    },
    personHeight: {
        type: Number
    },
    bodyWeight: {
        type: Number
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
    evaluation: {
        type: String
    },
    conclusions: {
        type: String
    },
    recommendation: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('Ev_Eff_Ad_P_B_Measurement', evEffAdPBMeasurementSchema);
