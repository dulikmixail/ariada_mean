const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physicalRehabilitationSchema = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_Group'
    },
    forms: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_Form'
    },
    allowed: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_Allowed'
    }
}, {versionKey: false});

module.exports = mongoose.model('Physical_Rehabilitation', physicalRehabilitationSchema);
