const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let treatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Treatment', treatmentSchema);
