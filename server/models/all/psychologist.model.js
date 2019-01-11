const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let psychologistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Psychologist', psychologistSchema);
