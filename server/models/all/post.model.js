const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let postSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = mongoose.model('Post', postSchema);
