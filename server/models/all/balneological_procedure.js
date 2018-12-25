const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let balneologicalProcedureSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Balneological_Procedure = mongoose.model('Balneological_Procedure', balneologicalProcedureSchema);
module.exports = require('../../services/crud.service')(Balneological_Procedure);
