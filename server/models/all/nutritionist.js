const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let nutritionistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Nutritionist = mongoose.model('Nutritionist', nutritionistSchema);
module.exports = require('../../services/crud.service')(Nutritionist);
