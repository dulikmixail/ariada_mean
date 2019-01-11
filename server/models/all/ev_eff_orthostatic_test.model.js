const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffOrthostaticTestSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Orth_T_Measurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Orth_T_Measurement'
    },
    difference: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Orth_T_Measurement'
    },
    conclusion: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_Orth_T_Measurement'
    }
}, {versionKey: false});

module.exports = mongoose.model('Ev_Eff_Orthostatic_Test', evEffOrthostaticTestSchema);
