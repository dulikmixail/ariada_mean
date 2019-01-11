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

module.exports = mongoose.model('M_Allowed_Contraindications', mAllowedContraindicationsSchema);
