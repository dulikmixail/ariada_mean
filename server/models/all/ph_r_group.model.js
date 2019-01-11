const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subGroup: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_Sub_Group'
    }
}, {versionKey: false});

module.exports = mongoose.model('Ph_R_Group', phRGroupSchema);
