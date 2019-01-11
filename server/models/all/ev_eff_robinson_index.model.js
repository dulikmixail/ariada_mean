const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffRobinsonIndexSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_R_Ind_Measurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_R_Ind_Measurement'
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: 'Ev_Eff_R_Ind_Measurement'
    }
}, {versionKey: false});


module.exports = mongoose.model('Ev_Eff_Robinson_Index', evEffRobinsonIndexSchema);
