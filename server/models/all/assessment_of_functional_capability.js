const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let assessmentOfFunctionalCapabilitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

let Assessment_Of_Functional_Capability = mongoose.model('Assessment_Of_Functional_Capability', assessmentOfFunctionalCapabilitySchema);
module.exports = require('../../services/crud.service')(Assessment_Of_Functional_Capability);
