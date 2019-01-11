const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let criterionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Criterion', criterionSchema);
