const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let modeOfMotorActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Mode_Of_Motor_Activity = mongoose.model('Mode_Of_Motor_Activity', modeOfMotorActivitySchema);
module.exports = require('../../services/crud.service')(Mode_Of_Motor_Activity);
