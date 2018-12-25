const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

let employeeSchema = new Schema({
    itemNo: {
        type: Number,
        required: true
    },
    employmentDate: {
        type: Date,
        required: true,
    },
    expirationDate: {
        type: Date,
    },
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    residencePlace: {
        type: String
    },
    educationFile: {
        type: String
    },
    refresherCoursesDate: {
        type: Date
    },
    placeRefresherCoursesFile: {
        type: String
    },
    branch: {
        type: [Schema.Types.ObjectId],
        ref: 'Branch'
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'Review'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    }
}, {versionKey: false});

employeeSchema.plugin(deepPopulate);

let Employee = mongoose.model('Employee', employeeSchema);
module.exports = require('../../services/crud.service')(Employee);
