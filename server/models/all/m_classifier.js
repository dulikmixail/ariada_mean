const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClassifierSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    values: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Cl_Value'
    },
}, {versionKey: false});


let M_Classifier = mongoose.model('M_Classifier', mClassifierSchema);
module.exports = require('../../services/crud.service')(M_Classifier);
