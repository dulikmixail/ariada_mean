const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let psychologistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Psychologist = mongoose.model('Psychologist', psychologistSchema);
module.exports = require('../../services/crud.service')(Psychologist);
