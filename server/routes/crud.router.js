const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../helpers/jwt');

module.exports = function (requireServiceName, routePath) {
  const service = require('../services/crud_services/' + requireServiceName);
  router.post(routePath, jwtMiddleware, function (req, res) {
    service.create(req.body, function (err, result) {
      err ? res.status(400).send(err) : res.send(result);
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

  router.get(routePath, jwtMiddleware, function (req, res) {
    service.find({}, function (err, result) {
      err ? res.status(404).send(err) : res.send(result)
    })
  });

  router.get(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.findById(req.params.id, function (err, result) {
      err || !result ? res.status(404).send({message: 'Entity not found'}) : res.send(result);
    })
  });

  router.put(routePath + '/:id', jwtMiddleware, function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      service.update({_id: req.params.id}, req.body, function (err, result) {
        err ? res.status(404).send({message: 'Entity not found and not update'}) :
          result.n === 0 ? res.status(400).send({message: 'Not valid body request'}) : res.send(result);
      });
    } else {
      res.status(400).send({
        message: 'Empty body request'
      })
    }
  });

  router.delete(routePath + '/all', jwtMiddleware, function (req, res) {
    service.deleteAll((err, result) => {
      err ? res.status(404).send({message: 'Entities not deleted'}) : res.send(result);
    })
  });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.delete({_id: req.params.id}, (err, result) => {
      err || !result ? res.status(404).send({message: 'Entity not found and not deleted'}) : res.send(result);
    })
  });

  return router;
};
