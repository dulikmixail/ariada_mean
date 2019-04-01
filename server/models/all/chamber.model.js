const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let chamberSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Chamber', chamberSchema);
