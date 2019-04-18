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
        if (!!req.files['photo'] && req.files['photo'].length > 0) {
          employeeModel = Object.assign(employeeModel, {photo: req.files['photo'][0].filename});
        }
        if (!!req.files['educationFile'] && req.files['educationFile'].length > 0) {
          employeeModel = Object.assign(employeeModel, {educationFile: req.files['educationFile'][0].filename});
        }
        if (!!req.files['placeRefresherCoursesFile'] && req.files['placeRefresherCoursesFile'].length > 0) {
          employeeModel = Object.assign(employeeModel, {placeRefresherCoursesFile: req.files['placeRefresherCoursesFile'][0].filename});
        }
      }
      employeeService.create(employeeModel, function (err, doc) {
        if (err || !doc) {
          res.status(400).send({message: `${config.get('router.messages.7')} -> ${err.message}`});
        } else {
          res.send(doc);
        }
      })
    });

  return router;
};
