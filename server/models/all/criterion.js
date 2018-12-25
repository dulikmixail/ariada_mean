const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let criterionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Criterion = mongoose.model('Criterion', criterionSchema);
module.exports = require('../../services/crud.service')(Criterion);
