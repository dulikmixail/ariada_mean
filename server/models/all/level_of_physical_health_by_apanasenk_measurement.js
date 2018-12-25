const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let levelOfPhysicalHealthByApanasenkMeasurementSchema = new Schema({
    typeOfLoad: {
        type: String
    },
    signal: {
        type: String
    },
    date: {
        type: Date
    },
    bodyWeight: {
        type: Number
    },
    personHeight: {
        type: Number
    },
    capacityOfLungs: {
        type: Number
    },
    dynamometryOfBrush: {
        type: Number
    },
    heartRate: {
        type: Number
    },
    systolicPressure: {
        type: Number
    },
    restorePulseMinutes: {
        type: Number
    },
    scores: {
        type: Number
    },
    conclusions: {
        type: String
    }
}, {versionKey: false});


let Level_Of_Physical_Health_By_Apanasenk_Measurement = mongoose.model('Level_Of_Physical_Health_By_Apanasenk_Measurement', levelOfPhysicalHealthByApanasenkMeasurementSchema);
module.exports = require('../../services/crud.service')(Level_Of_Physical_Health_By_Apanasenk_Measurement);
