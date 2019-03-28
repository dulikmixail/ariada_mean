const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../helpers/jwt');
const config = require('config');
const uploadFilesService = require('../services/upload-files.service');

module.exports = function (requireServiceName, routePath) {
  const employeeService = require('../services/crud_services/' + requireServiceName);

  router.post(
    routePath,
    jwtMiddleware,
    uploadFilesService.upload.fields([
      {name: 'photo', maxCount: 1},
      {name: 'educationFile', maxCount: 1},
      {name: 'placeRefresherCoursesFile', maxCount: 1}
    ]),
    function (req, res) {
      let employeeModel = req.body;
      if (!!req.files) {
        if (req.files['photo'].length > 0) {
          employeeModel = Object.assign(employeeModel, {photo: req.files['photo'][0].filename});
        }
        if (req.files['educationFile'].length > 0) {
          employeeModel = Object.assign(employeeModel, {educationFile: req.files['educationFile'][0].filename});
        }
        if (req.files['placeRefresherCoursesFile'].length > 0) {
          employeeModel = Object.assign(employeeModel, {placeRefresherCoursesFile: req.files['placeRefresherCoursesFile'][0].filename});
        }
      }
      employeeService.create(employeeModel, function (err, doc) {
        err || !doc ? res.status(400).send({message: config.get('router.messages.7')}) : res.send(doc);
      })
    });

  router.get(routePath, jwtMiddleware, function (req, res) {
    employeeService.find({}, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc)
    })
  });

  router.get(routePath + '/:id', jwtMiddleware, function (req, res) {
    employeeService.findById(req.params.id, function (err, doc) {
      err || !doc ? res.status(404).send({message: config.get('router.messages.1')}) : res.send(doc);
    })
  });

  router.put(routePath + '/:id', jwtMiddleware, function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      employeeService.update({_id: req.params.id}, req.body, function (err, doc) {
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
    employeeService.deleteAll((err, doc) => {
      err ? res.status(404).send({message: config.get('router.messages.6')}) : res.send(doc);
    })
  });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    employeeService.delete({_id: req.params.id}, (err, doc) => {
      err || !doc ? res.status(404).send({message: config.get('router.messages.5')}) : res.send(doc);
    })
  });

  router.post(routePath + '/filter', jwtMiddleware, function (req, res) {
    employeeService.find(req.body, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  router.get(routePath + '/filter', jwtMiddleware, function (req, res) {
    employeeService.find(req.query, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  return router;
};
