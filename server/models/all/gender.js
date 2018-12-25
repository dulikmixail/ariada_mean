const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let genderSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Gender = mongoose.model('Gender', genderSchema);
module.exports = require('../../services/crud.service')(Gender);
