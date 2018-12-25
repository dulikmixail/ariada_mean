const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let indeksSkibinskoyMeasurementSchema = new Schema({
    mark: {
        type: Number,
        min: 1,
        max: 5
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    value: {
        type: String
    }
}, {versionKey: false});

let Indeks_Skibinskoy_Measurement = mongoose.model('Indeks_Skibinskoy_Measurement', indeksSkibinskoyMeasurementSchema);
module.exports = require('../../services/crud.service')(Indeks_Skibinskoy_Measurement);
