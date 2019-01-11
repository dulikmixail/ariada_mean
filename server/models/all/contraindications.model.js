const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let contraindicationsSchema = new Schema({
    massageAllowed: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed'
    }
}, {versionKey: false});

module.exports = mongoose.model('Contraindications', contraindicationsSchema);
