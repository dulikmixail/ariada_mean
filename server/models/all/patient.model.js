const mongoose = require('mongoose')
  , Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const config = require('config');

const uploadFiles = require('../../services/upload-files.service');

let patientSchema = new mongoose.Schema({
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
    type: Date
  },
  permanentResidence: {
    type: String
  },
  addressOfRelativesAndFamily: {
    type: String
  },
  phoneNumbers: {
    type: [String],
    required: true
  },
  medicalCardNumber: {
    type: String
  },
  workplace: {
    type: String
  },
  workPost: {
    type: String
  },
  isDelete: {
    type: Boolean
  },
  gender: {
    type: Schema.Types.ObjectId,
    ref: 'Gender',
    required: true
  },
  photo: {
    type: String
  }
}, {versionKey: false});

patientSchema.index({'$**': 'text'}, {default_language: config.get('mongo.index.defaultLanguage')});

patientSchema.plugin(mongoosePaginate);

patientSchema.post('remove', function (doc) {
  if (!!doc.photo) {
    uploadFiles.deleteByName(doc.photo)
      .then(() => {
      })
      .catch(() => {
      });
  }
});

module.exports = mongoose.model('Patient', patientSchema);
