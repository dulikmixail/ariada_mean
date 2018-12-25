const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffKerdoIndexSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: ''
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: ''
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: ''
    }
}, {versionKey: false});


let Ev_Eff_Kerdo_Index = mongoose.model('Ev_Eff_Kerdo_Index', evEffKerdoIndexSchema);
module.exports = require('../../services/crud.service')(Ev_Eff_Kerdo_Index);
