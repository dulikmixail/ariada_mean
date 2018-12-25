const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let chamberSchema = new Schema({
    number: {
        type: Number,
        required: true
    }
}, {versionKey: false});

let Chamber = mongoose.model('Chamber', chamberSchema);
module.exports = require('../../services/crud.service')(Chamber);
