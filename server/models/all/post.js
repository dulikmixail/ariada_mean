const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let postSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Post = mongoose.model('Post', postSchema);
module.exports = require('../../services/crud.service')(Post);

