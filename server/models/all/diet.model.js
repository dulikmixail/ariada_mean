const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let dietSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Diet', dietSchema);
