const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedContraindicationsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subContraindications: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Allowed_Sub_Contraindications',
    }
}, {versionKey: false});

let M_Allowed_Contraindications = mongoose.model('M_Allowed_Contraindications', mAllowedContraindicationsSchema);
module.exports = require('../../services/crud.service')(M_Allowed_Contraindications);
