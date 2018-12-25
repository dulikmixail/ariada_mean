const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClType = mongoose.model('M_Cl_Type', mClTypeSchema);
module.exports = require('../../services/crud.service')(MClType);
