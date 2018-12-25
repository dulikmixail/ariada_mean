const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleAndValuesSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_I_Title',
        required: true
    },
    values: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_I_Value',
        required: true
    }
}, {versionKey: false});


let Ph_R_F_L_I_Title_And_Values = mongoose.model('Ph_R_F_L_I_Title_And_Values', phRFLITitleAndValuesSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_I_Title_And_Values);
