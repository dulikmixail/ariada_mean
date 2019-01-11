const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let departmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Department', departmentSchema);
