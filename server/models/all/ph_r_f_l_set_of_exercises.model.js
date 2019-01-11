const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSetOfExercisesSchema = new Schema({
    exercise: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_S_Of_Ex_Image'
    }
}, {versionKey: false});

module.exports = mongoose.model('Ph_R_F_L_Set_Of_Exercises', phRFLSetOfExercisesSchema);
