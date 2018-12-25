const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let departmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Department = mongoose.model('Department', departmentSchema);
module.exports = require('../../services/crud.service')(Department);
