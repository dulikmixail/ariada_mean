const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rCRecordsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    program: {
        type: [Schema.Types.ObjectId],
        ref: 'Physical_Rehabilitation'
    },
    complaints: {
        type: [String]
    },
    alterLoad: {
        type: [Schema.Types.ObjectId],
        ref: 'Measurement'
    },
    beforeLoad: {
        type: [Schema.Types.ObjectId],
        ref: 'Measurement'
    },
    afterSomeTime: {
        type: [Schema.Types.ObjectId],
        ref: 'Measurement'
    },
    fullRestoreTime: {
        type: String
    },
    ECGAfterLoad: {
        type: String
    },
    ECGBeforeLoad: {
        type: String
    },
    conclusion: {
        type: String
    },
    contraindications: {
        type: [Schema.Types.ObjectId],
        ref: 'Contraindications'
    },

}, {versionKey: false});

let RC_Records = mongoose.model('RC_Records', rCRecordsSchema);
module.exports = require('../../services/crud.service')(RC_Records);
