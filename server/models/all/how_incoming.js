const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let howIncomingSchema = new Schema({
    title: {
        type: String
    }
}, {versionKey: false});

let How_Incoming = mongoose.model('How_Incoming', howIncomingSchema);
module.exports = require('../../services/crud.service')(How_Incoming);
