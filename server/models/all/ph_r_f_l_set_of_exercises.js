const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSetOfExercisesSchema = new Schema({
    exercise: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_S_Of_Ex_Image'
    }
}, {versionKey: false});

let Ph_R_F_L_Set_Of_Exercises = mongoose.model('Ph_R_F_L_Set_Of_Exercises', phRFLSetOfExercisesSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_Set_Of_Exercises);
