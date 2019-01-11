const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let balneologicalProcedureSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Balneological_Procedure', balneologicalProcedureSchema);
