const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let chamberSchema = new Schema({
    number: {
        type: Number,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Chamber', chamberSchema);
