const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let psychologicalStatusSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Psychological_Status = mongoose.model('Psychological_Status', psychologicalStatusSchema);
module.exports = require('../../services/crud.service')(Psychological_Status);
