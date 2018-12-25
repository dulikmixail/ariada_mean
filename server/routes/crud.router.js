const express = require('express');
const router = express.Router();

module.exports = function (searchModelName, routePath) {
  const MongooseModel = require('../models/all/' + searchModelName);
  router.post(routePath, function (req, res) {
    MongooseModel.create(req.body, function (err, result) {
      err ? res.status(400).send(err) : res.send(result);
    })
  });
  router.post(routePath + '/filter', function (req, res) {
    MongooseModel.find(req.body, function (err, result) {
      err ? res.status(404).send(err) : res.send(result);
    })
  });

  router.get(routePath + '/filter', function (req, res) {
    MongooseModel.find(req.query, function (err, result) {
      err ? res.status(404).send(err) : res.send(result);
    })
  });

  router.get(routePath, function (req, res) {
    MongooseModel.find({}, function (err, result) {
      err ? res.status(404).send(err) : res.send(result);
    })
  });

  router.get(routePath + '/:id', function (req, res) {
    MongooseModel.findById(req.params.id, function (err, result) {
      err || !result ? res.status(404).send({error: 'Entity not found'}) : res.send(result);
    })
  });

  router.put(routePath + '/:id', function (req, res) {
    if (Object.keys(req.body).length !== 0) {
      MongooseModel.update({_id: req.params.id}, req.body, function (err, result) {
        err ? res.status(404).send({error: 'Entity not found and not update'}) :
          result.n === 0 ? res.status(400).send({error: 'Not valid body request'}) : res.send(result);
      });
    } else {
      res.status(400).send({
        error: 'Empty body request'
      })
    }
  });

  router.delete(routePath + '/all', function (req, res) {
    MongooseModel.deleteAll((err, result) => {
      err ? res.status(404).send({error: 'Entities not deleted'}) : res.send(result);
    })
  });

  router.delete(routePath + '/:id', function (req, res) {
    MongooseModel.delete({_id: req.params.id}, (err, result) => {
      err || !result ? res.status(404).send({error: 'Entity not found and not deleted'}) : res.send(result);
    })
  });


  return router;
};
