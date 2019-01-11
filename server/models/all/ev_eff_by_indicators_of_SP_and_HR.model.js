const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffByIndicatorsOfSPAndHRSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_By_Ind_Of_Sp_And_Hr_Measurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_By_Ind_Of_Sp_And_Hr_Measurement'
    }
}, {versionKey: false});

module.exports = mongoose.model('Ev_Eff_By_Indicators_Of_SP_And_HR', evEffByIndicatorsOfSPAndHRSchema);
