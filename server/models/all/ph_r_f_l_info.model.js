const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLInfoSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_I_Title',
        required: true
    },
    value: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_I_Value',
        required:true
    },

}, {versionKey: false});


module.exports = mongoose.model('Ph_R_F_L_Info',phRFLInfoSchema);
