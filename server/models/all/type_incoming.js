const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let typeIncomingSchema = new Schema({
    title: {
        type: String
    }
}, {versionKey: false});

let Type_Incoming = mongoose.model('Type_Incoming', typeIncomingSchema);
module.exports = require('../../services/crud.service')(Type_Incoming);
