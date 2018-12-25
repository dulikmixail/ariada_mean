const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let exerciseTherapyAndMechanotherapyGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    exerciseTherapyAndMechanotherapyItems: {
        type: [Schema.Types.ObjectId],
        ref: 'Exercise_Therapy_And_Mechanotherapy_Item'
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: 'Exercise_Therapy_And_Mechanotherapy_Group'
    },

}, {versionKey: false});

let Exercise_Therapy_And_Mechanotherapy_Group = mongoose.model('Exercise_Therapy_And_Mechanotherapy_Group', exerciseTherapyAndMechanotherapyGroupSchema);
module.exports = require('../../services/crud.service')(Exercise_Therapy_And_Mechanotherapy_Group);
