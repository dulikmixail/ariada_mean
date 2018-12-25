const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClInterventionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClIntervention = mongoose.model('M_Cl_Intervention', mClInterventionSchema);
module.exports = require('../../services/crud.service')(MClIntervention);
