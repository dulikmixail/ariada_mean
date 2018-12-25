const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let diaryOfSelfControlSchema = new Schema({
    records: {
        type: [Schema.Types.ObjectId],
        ref: 'RC_Records'
    },
}, {versionKey: false});

let Diary_Of_Self_Control = mongoose.model('Diary_Of_Self_Control', diaryOfSelfControlSchema);
module.exports = require('../../services/crud.service')(Diary_Of_Self_Control);
