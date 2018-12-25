const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mDurationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    numberOfUnits:{
        type: Number,
        required: true
    },
    minutes: {
        type: Number,
        required: true
    }
}, {versionKey: false});


let M_Duration = mongoose.model('M_Duration',mDurationSchema);
module.exports = require('../../services/crud.service')(M_Duration);
