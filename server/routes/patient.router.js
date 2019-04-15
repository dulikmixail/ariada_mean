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

  router.get(routePath, jwtMiddleware, function (req, res) {
    patientService.find({}, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc)
    })
  });

  router.get(routePath + '/:id', jwtMiddleware, function (req, res) {
    patientService.findById(req.params.id, function (err, doc) {
      err || !doc ? res.status(404).send({message: config.get('router.messages.1')}) : res.send(doc);
    })
  });

  router.put(routePath + '/:id', jwtMiddleware, function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      patientService.update({_id: req.params.id}, req.body, function (err, doc) {
        err ? res.status(404).send({message: config.get('router.messages.2')}) :
          doc.n === 0 ? res.status(400).send({message: config.get('router.messages.3')}) : res.send(doc);
      });
    } else {
      res.status(400).send({
        message: config.get('router.messages.4')
      })
    }
  });

  router.delete(routePath + '/all', jwtMiddleware, function (req, res) {
    patientService.deleteAll((err, doc) => {
      err ? res.status(404).send({message: config.get('router.messages.6')}) : res.send(doc);
    })
  });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    patientService.delete({_id: req.params.id}, (err, doc) => {
      err || !doc ? res.status(404).send({message: config.get('router.messages.5')}) : res.send(doc);
    })
  });

  router.post(routePath + '/filter', jwtMiddleware, function (req, res) {
    patientService.filter(req.body, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  router.get(routePath + '/filter', jwtMiddleware, function (req, res) {
    patientService.filter(req.query, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  return router;
};
