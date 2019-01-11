const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

    let mTreatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: [Number],
        required: true
    }

}, {versionKey: false});

module.exports = mongoose.model('M_Treatment', mTreatmentSchema);
