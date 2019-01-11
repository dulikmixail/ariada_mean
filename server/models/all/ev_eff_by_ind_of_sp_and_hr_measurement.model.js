const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffByIndOfSpAndHrMeasurementSchema = new Schema({
    typeOfLoad: {
        type: String
    },
    signal: {
        type: String
    },
    date: {
        type: Date
    },
    heartRate: {
        type: Number
    },
    systolicPressure: {
        type: Number
    },
    characteristicsOfStateOfSSS: {
        type: String
    },
    evaluation: {
        type: String
    },
    recommendation: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('Ev_Eff_By_Ind_Of_Sp_And_Hr_Measurement', evEffByIndOfSpAndHrMeasurementSchema);
