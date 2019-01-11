const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let limitationOfUnitsSchema = new Schema({
    titles: {
        type: [String],
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Limitation_Of_Units', limitationOfUnitsSchema);
