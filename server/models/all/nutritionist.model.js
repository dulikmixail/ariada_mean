const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let nutritionistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Nutritionist', nutritionistSchema);
