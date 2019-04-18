const mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const mongoosePaginate = require('mongoose-paginate-v2');
const config = require('config');

const uploadFiles = require('../../services/upload-files.service');

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
    required: true
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
    type: Schema.Types.ObjectId,
    ref: 'Branch',
    required: true
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
  photo: {
    type: String
  }
}, {versionKey: false});

employeeSchema.index({'$**': 'text'}, {default_language: config.get('mongo.index.defaultLanguage')});

employeeSchema.plugin(deepPopulate);
employeeSchema.plugin(mongoosePaginate);

employeeSchema.post('remove', function (doc) {
  if (!!doc.educationFile) {
    uploadFiles.deleteByName(doc.educationFile)
      .then(() => {
      })
      .catch(() => {
      });
  }
  if (!!doc.placeRefresherCoursesFile) {
    uploadFiles.deleteByName(doc.placeRefresherCoursesFile)
      .then(() => {
      })
      .catch(() => {
      });
  }
  if (!!doc.photo) {
    uploadFiles.deleteByName(doc.photo)
      .then(() => {
      })
      .catch(() => {
      });
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
