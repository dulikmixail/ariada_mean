const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSOfExImageSchema = new Schema({
    url: {
        type: String
    },
    description: {
        type: String
    }
}, {versionKey: false});

let Ph_R_F_L_S_Of_Ex_Image = mongoose.model('Ph_R_F_L_S_Of_Ex_Image', phRFLSOfExImageSchema);
module.exports = require('../../services/crud.service')(Ph_R_F_L_S_Of_Ex_Image);
