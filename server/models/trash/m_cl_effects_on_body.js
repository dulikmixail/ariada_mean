const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClEffectsOnBodySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClEffectsOnBody = mongoose.model('M_Cl_Effects_On_Body', mClEffectsOnBodySchema);
module.exports = require('../../services/crud.service')(MClEffectsOnBody);
