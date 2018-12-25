const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physiotherapyEquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Physiotherapy_Equipment = mongoose.model('Physiotherapy_Equipment', physiotherapyEquipmentSchema);
module.exports = require('../../services/crud.service')(Physiotherapy_Equipment);
