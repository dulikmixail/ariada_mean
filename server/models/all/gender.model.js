const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let genderSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Gender', genderSchema);
