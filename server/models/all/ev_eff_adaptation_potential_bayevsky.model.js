const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffAdaptationPotentialBayevskySchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Ad_P_B_Measurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Ad_P_B_Measurement'
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Ad_P_B_Measurement'
    }
}, {versionKey: false});

module.exports = mongoose.model('Ev_Eff_Adaptation_Potential_Bayevsky', evEffAdaptationPotentialBayevskySchema);
