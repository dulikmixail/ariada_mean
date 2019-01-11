const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let branchSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Branch', branchSchema);
