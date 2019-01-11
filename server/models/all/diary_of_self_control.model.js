const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let diaryOfSelfControlSchema = new Schema({
    records: {
        type: [Schema.Types.ObjectId],
        ref: 'RC_Records'
    },
}, {versionKey: false});

module.exports = mongoose.model('Diary_Of_Self_Control', diaryOfSelfControlSchema);
