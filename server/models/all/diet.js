const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let dietSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Diet = mongoose.model('Diet', dietSchema);
module.exports = require('../../services/crud.service')(Diet);
