const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let selfServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Self_Service', selfServiceSchema);
