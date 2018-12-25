const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let unitOfMeasureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Unit_Of_Measure = mongoose.model('Unit_Of_Measure', unitOfMeasureSchema);
module.exports = require('../../services/crud.service')(Unit_Of_Measure);
