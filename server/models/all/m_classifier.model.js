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


module.exports = mongoose.model('M_Classifier', mClassifierSchema);
