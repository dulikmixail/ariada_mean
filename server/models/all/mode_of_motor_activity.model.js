const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let modeOfMotorActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Mode_Of_Motor_Activity', modeOfMotorActivitySchema);
