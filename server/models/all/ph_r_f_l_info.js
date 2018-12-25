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


let Ph_R_F_L_Info = mongoose.model('Ph_R_F_L_Info',phRFLInfoSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_Info);
