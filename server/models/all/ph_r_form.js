const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFormSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level : {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_Level'
    }
}, {versionKey: false});

let Ph_R_Form = mongoose.model('Ph_R_Form', phRFormSchema);
module.exports = require('../../services/crud.service')(Ph_R_Form);
