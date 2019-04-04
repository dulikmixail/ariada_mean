const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let massageSchema = new Schema({
    classifier: {
        type: Schema.Types.ObjectId,
        ref: 'M_Classifier'
    },
    duration: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Duration'
    },
    treatment: {
        type: Schema.Types.ObjectId,
        ref: 'M_Treatment'
    },
    influenceOfIndividualMassageTechniques: {
        type: Schema.Types.ObjectId,
        ref: 'M_Classifier'
    },
    stimulatingAndCalmingEffects:{
        type: Schema.Types.ObjectId,
        ref: 'M_Classifier'
    },
    scheme: {
        type: Schema.Types.ObjectId,
        ref: 'M_Scheme'
    }
}, {versionKey: false});

module.exports = mongoose.model('Massage',massageSchema);
