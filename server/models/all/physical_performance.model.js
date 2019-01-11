const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let physicalPerformanceSchema = new Schema({
    mode_of_motor_activity: {
        type: Schema.Types.ObjectId,
        ref: 'Mode_Of_Motor_Activity',
        required: true
    },
    thresholdLoadInMen: {
        type: String,
        required: true
    },
    thresholdLoadInWomen: {
        type: String,
        required: true
    },
    loadValue: {
        type: String,
        required: true
    },
    trainingHeartRate: {
        type: Number,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Physical_Performance', physicalPerformanceSchema);
