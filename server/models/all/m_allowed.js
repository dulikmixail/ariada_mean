const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedSchema = new Schema({
    allowedLevel: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed_Level',
        required: true
    },
    contraindications: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Allowed_Contraindications',
        required: true
    }
}, {versionKey: false});

let M_Allowed = mongoose.model('M_Allowed', mAllowedSchema);
module.exports = require('../../services/crud.service')(M_Allowed);
