const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLevelSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_Title',
    },
    info: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_Info'
    },
    mode_of_motor_activity: {
        type: Schema.Types.ObjectId,
        ref: 'Mode_Of_Motor_Activity'
    },
    set_of_exercises: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_Set_Of_Exercises'
    },

}, {versionKey: false});

let Ph_R_F_Level = mongoose.model('Ph_R_F_Level', phRFLevelSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_Level);
