const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let psychologicalStatusSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Psychological_Status', psychologicalStatusSchema);
