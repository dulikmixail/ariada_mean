const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let assessmentOfFunctionalCapabilitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
}, {versionKey: false});

module.exports = mongoose.model('Assessment_Of_Functional_Capability', assessmentOfFunctionalCapabilitySchema);
