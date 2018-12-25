const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let CalculationSchema = new Schema({
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
    pulseRate: {
        type: Number
    },
    typesOfReaction1: {
        type: String
    },
    recommendations1: {
        type: String
    },
    pulseRecoveryMinutes: {
        type: Number
    },
    typesOfReaction2: {
        type: String
    },
    recommendations2: {
        type: String
    },
    changesSystolicPressure: {
        type: Number
    },
    typesOfReaction3: {
        type: String
    },
    recommendations3: {
        type: String
    },
    changesDiastolicPressure: {
        type: Number
    },
    typesOfReaction4: {
        type: String
    },
    recommendations4: {
        type: String
    },
    changesPulsePressure: {
        type: Number
    },
    typesOfReaction5: {
        type: String
    },
    recommendations5: {
        type: String
    },
    recoveryPulsePressureMinutes: {
        type: Number
    },
    typesOfReaction6: {
        type: String
    },
    recommendations6: {
        type: String
    },
}, {versionKey: false});

let Calculation = mongoose.model('Calculation', CalculationSchema);
module.exports = require('../../services/crud.service')(Calculation);
