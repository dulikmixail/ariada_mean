const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedSubContraindicationsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

let M_Allowed_Sub_Contraindications = mongoose.model('M_Allowed_Sub_Contraindications', mAllowedSubContraindicationsSchema);
module.exports = require('../../services/crud.service')(M_Allowed_Sub_Contraindications);
