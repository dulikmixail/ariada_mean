const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let typeIncomingSchema = new Schema({
    title: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('Type_Incoming', typeIncomingSchema);
