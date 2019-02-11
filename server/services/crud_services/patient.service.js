const mongoose = require('mongoose');
const Patient = require('../../models/all/patient.model');

//Create
const exportObject = {};
exportObject.create = function (data, photo, callback) {
  let patient = new mongoose.model('Patient')();
  patient = Object.assign(patient,data);
  patient.attach('photo', photo)
    .then(()=>patient.save(callback));
};

//Read
exportObject.find = function (filter, callback) {
  Patient.find(filter, callback)
};

exportObject.findById = function (id, callback) {
  Patient.findById(id, callback)
};

exportObject.findOne = function (filter, callback) {
  Patient.findOne(filter, callback)
};

//Update
exportObject.update = function (filter, data, callback) {
  Patient.update(filter, data, callback)
};

//Delete
exportObject.delete = function (filter, callback) {
  Patient.findOneAndDelete(filter, callback)
};

exportObject.deleteAll = function (callback) {
  Patient.deleteMany({}, callback)
};

module.exports = exportObject;



