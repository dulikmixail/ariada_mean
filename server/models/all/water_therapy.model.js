const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let waterTherapySchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Water_Therapy', waterTherapySchema);
