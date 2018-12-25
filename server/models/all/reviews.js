const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let reviewSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    mark: {
        type: Number,
        min: 1,
        max: 5
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {versionKey: false});

let Review = mongoose.model('Review', reviewSchema);
module.exports = require('../../services/crud.service')(Review);
