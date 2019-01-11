const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let korsZaKlapchukaMeasurementSchema = new Schema({
    signal: {
        type: Number
    },
    bodyWeight: {
        type: Number
    },
    personHeight: {
        type: Number
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender',
    },
    pulseRate: {
        type: Number
    },
    genciTest: {
        type: Number
    },
    systolicPressure: {
        type: Number
    },
    bodyMassIndex: {
        type: Number
    },
    powerHangingOnBentHands: {
        type: Number
    },
    hypoxicIndex: {
        type: Number
    },
    doubleHypoxicIndex: {
        type: Number
    },
    martineKushelevskyTest: {
        type: Number
    },
    numberOfPoints: {
        type: Number
    },
    evaluation: {
        type: String
    }

}, {versionKey: false});


module.exports = mongoose.model('Kors_Za_Klapchuka_Measurement', korsZaKlapchukaMeasurementSchema);
