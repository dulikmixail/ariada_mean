const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mSchemeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('M_Scheme',mSchemeSchema);
