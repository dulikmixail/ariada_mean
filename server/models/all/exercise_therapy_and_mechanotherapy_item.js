const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let exerciseTherapyAndMechanotherapyItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    counter: {
        type: Schema.Types.ObjectId,
        ref: 'Number_Unit'
    },
    time: {
        type: Schema.Types.ObjectId,
        ref: 'Number_Unit'
    },
    break: {
        type: Schema.Types.ObjectId,
        ref: 'Number_Unit'
    },
    compatibility: {
        type: String
    },

}, {versionKey: false});


let Exercise_Therapy_And_Mechanotherapy_Item = mongoose.model('Exercise_Therapy_And_Mechanotherapy_Item', exerciseTherapyAndMechanotherapyItemSchema);
module.exports = require('../../services/crud.service')(Exercise_Therapy_And_Mechanotherapy_Item);
