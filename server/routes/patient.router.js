const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../helpers/jwt');
const config = require('config');
const upload = require('multer')({dest: 'server/uploads/files/patients'});

module.exports = function (requireServiceName, routePath) {
  const service = require('../services/crud_services/' + requireServiceName);

  router.post(routePath, jwtMiddleware, upload.single('photo'), function (req, res, next) {
    service.create(req.body, function (err, doc) {
      if (err) {
        res.status(400).send(err);
      } else {
        if (req.file) {
          console.log(req.file);
          doc.attach('photo', req.file)
            .then(() => {
              doc.save();
            })
            .then(() => service.findById(doc._id, function (err, doc2) {
              err || !doc2 ? res.status(404).send({message: config.get('router.messages.0')}) : res.send(doc2);
            }))
            .catch((err) => {
              res.status(500).send({message: err.message});
            });
        } else {
          res.send(doc);
        }
      }
    })
  });

  router.get(routePath, jwtMiddleware, function (req, res) {
    service.find({}, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc)
    })
  });

  router.get(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.findById(req.params.id, function (err, doc) {
      err || !doc ? res.status(404).send({message: config.get('router.messages.1')}) : res.send(doc);
    })
  });

  router.put(routePath + '/:id', jwtMiddleware, function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      service.update({_id: req.params.id}, req.body, function (err, doc) {
        err ? res.status(404).send({message: config.get('router.messages.2')}) :
          doc.n === 0 ? res.status(400).send({message: config.get('router.messages.3')}) : res.send(doc);
      });
    } else {
      res.status(400).send({
        message: config.get('router.messages.4')
      })
    }
  });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.delete({_id: req.params.id}, (err, doc) => {
      err || !doc ? res.status(404).send({message: config.get('router.messages.5')}) : res.send(doc);
    })
  });

  router.delete(routePath + '/all', jwtMiddleware, function (req, res) {
    service.deleteAll((err, doc) => {
      err ? res.status(404).send({message: config.get('router.messages.6')}) : res.send(doc);
    })
  });

  router.post(routePath + '/filter', jwtMiddleware, function (req, res) {
    service.find(req.body, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  router.get(routePath + '/filter', jwtMiddleware, function (req, res) {
    service.find(req.query, function (err, doc) {
      err ? res.status(404).send(err) : res.send(doc);
    })
  });

  return router;
};