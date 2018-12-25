const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClIndividualSignsSchema = new Schema({
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    age: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    physique: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    profession: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    relationToTemperatureOfEnvironment: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    skin: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    }
});


let MClIndividualSigns = mongoose.model('M_Cl_Individual_Signs', mClIndividualSignsSchema);
module.exports = require('../../services/crud.service')(MClIndividualSigns);
