const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physiotherapyEquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Physiotherapy_Equipment', physiotherapyEquipmentSchema);
