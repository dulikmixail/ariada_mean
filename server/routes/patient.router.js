const express = require('express');
let router = express.Router();
const jwtMiddleware = require('../helpers/jwt');
const config = require('config');
const uploadFilesService = require('../services/upload-files.service');

module.exports = function (requireServiceName, routePath) {
  const patientService = require('../services/crud_services/' + requireServiceName);

  router.post(routePath, jwtMiddleware, uploadFilesService.upload.single('photo'), function (req, res) {
    let patientModel = req.body;
    if (!!patientModel.phoneNumbers) {
      patientModel.phoneNumbers = patientModel.phoneNumbers.split(',');
    }
    if (!!req.file) {
      patientModel = Object.assign(patientModel, {photo: req.file.filename});
    }
    patientService.create(patientModel, function (err, doc) {
      err || !doc ? res.status(400).send({message: config.get('router.messages.7')}) : res.send(doc);
    })
  });

  return router;
};
