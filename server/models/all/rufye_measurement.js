const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rufyeMeasurementSchema = new Schema({
    heartRate: {
        type: Number
    },
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
        type: String
    },
    afterLoadPulseRate: {
        type: Number
    },
    beforeLoadPulseRate: {
        type: Number
    },
    someTimeLoadPulseRate: {
        type: Number
    },
    indexRufye: {
        type: String
    },
    evaluationOfFunctionalReservesOfTheHeart: {
        type: String
    },
    loadValue:{
        type: String
    }
}, {versionKey: false});


let Rufye_Measurement = mongoose.model('Rufye_Measurement', rufyeMeasurementSchema);
module.exports = require('../../services/crud.service')(Rufye_Measurement);
