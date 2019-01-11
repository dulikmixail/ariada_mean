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

module.exports = mongoose.model('Unit_Of_Measure', unitOfMeasureSchema);
