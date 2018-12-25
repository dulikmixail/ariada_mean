const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let branchSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Branch = mongoose.model('Branch', branchSchema);
module.exports = require('../../services/crud.service')(Branch);
