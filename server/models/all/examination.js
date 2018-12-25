const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let examinationSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    report: {
      type: String
    },
    use: {
        type: String
    },
    date:{
      type: Date
    }
}, {versionKey: false});

let Examination = mongoose.model('Examination',examinationSchema);
module.exports = require('../../services/crud.service')(Examination);
