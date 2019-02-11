const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../helpers/jwt');
const config = require('config');

module.exports = function (requireServiceName, routePath) {
  const service = require('../services/crud_services/' + requireServiceName);

  router.post(routePath, jwtMiddleware, function (req, res) {
    service.create(req.body, function (err, result) {
      err ? res.status(400).send(err) : res.send(result);
    })
  });

  router.get(routePath, jwtMiddleware, function (req, res) {
    service.find({}, function (err, result) {
      err ? res.status(404).send(err) : res.send(result)
    })
  });

  router.get(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.findById(req.params.id, function (err, result) {
      err || !result ? res.status(404).send({message: config.get('router.messages.1')}) : res.send(result);
    })
  });

  router.put(routePath + '/:id', jwtMiddleware, function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      service.update({_id: req.params.id}, req.body, function (err, result) {
        err ? res.status(404).send({message: config.get('router.messages.2')}) :
          result.n === 0 ? res.status(400).send({message: config.get('router.messages.3')}) : res.send(result);
      });
    } else {
      res.status(400).send({
        message: config.get('router.messages.4')
      })
    }
  });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.delete({_id: req.params.id}, (err, result) => {
      err || !result ? res.status(404).send({message: config.get('router.messages.5')}) : res.send(result);
    })
  });

  router.delete(routePath + '/all', jwtMiddleware, function (req, res) {
    service.deleteAll((err, result) => {
      err ? res.status(404).send({message: config.get('router.messages.6')}) : res.send(result);
    })
  });

  router.post(routePath + '/filter', jwtMiddleware, function (req, res) {
    service.find(req.body, function (err, result) {
      err ? res.status(404).send(err) : res.send(result);
    })
  });

  router.get(routePath + '/filter', jwtMiddleware, function (req, res) {
    service.find(req.query, function (err, result) {
      err ? res.status(404).send(err) : res.send(result);
    })
  });

  return router;
};
