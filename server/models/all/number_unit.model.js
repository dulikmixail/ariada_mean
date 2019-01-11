const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let numberUnitSchema = new Schema({
    numbers: {
        type: [Number],
        required: true
    },
    unit_of_measure: {
        type: Schema.Types.ObjectId,
        ref: 'Unit_Of_Measure',
        required: true
    },
    limitation_of_units: {
        type: Schema.Types.ObjectId,
        ref: 'Limitation_Of_Units'
    }

}, {versionKey: false});

module.exports = mongoose.model('Number_Unit', numberUnitSchema);
