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

module.exports = mongoose.model('Exercise_Therapy_And_Mechanotherapy_Item', exerciseTherapyAndMechanotherapyItemSchema);
