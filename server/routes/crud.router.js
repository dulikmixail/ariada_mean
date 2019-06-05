const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../helpers/jwt');
const config = require('config');

module.exports = function (requireServiceName, routePath) {
  const service = require('../services/crud_services/' + requireServiceName);

  router.post(routePath, jwtMiddleware, function (req, res) {
    service.create(req.body, function (err, doc) {
      err ? res.status(400).send(err) : res.send(doc);
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

  // router.delete(routePath + '/all', jwtMiddleware, function (req, res) {
  //   service.deleteAll((err, doc) => {
  //     err ? res.status(404).send({message: config.get('router.messages.6')}) : res.send(doc);
  //   })
  // });

  router.delete(routePath + '/:id', jwtMiddleware, function (req, res) {
    service.delete({_id: req.params.id}, (err, doc) => {
      err || !doc ? res.status(404).send({message: config.get('router.messages.5')}) : res.send(doc);
    })
  });

  router.post(routePath + '/search', jwtMiddleware, function (req, res) {
    if (req.body.hasOwnProperty('searchText') && typeof req.body.searchText === 'string') {
      service.search(req.body.searchText, function (err, doc) {
        err ? res.status(404).send(err) : res.send(doc);
      })
    } else if (typeof req.body === 'object' && !Array.isArray(req.body) && !req.body.hasOwnProperty('searchText')) {
      service.filter(req.body, function (err, doc) {
        err ? res.status(404).send(err) : res.send(doc);
      })
    } else {
      res.status(400).send({message: config.get('router.messages.12')});
    }
  });

  router.post(routePath + '/pagination', jwtMiddleware, function (req, res) {
    const options = req.body.options ? req.body.options : {};

    if (req.body.query && req.body.query.searchText && typeof req.body.query.searchText === 'string') {
      service.searchPaginate(req.body.query.searchText, options, function (err, doc) {
        err ? res.status(404).send(err) : res.send(doc);
      })
    } else if (typeof req.body === 'object' && !Array.isArray(req.body)) {
      const query = req.body.query ? req.body.query : {};
      service.paginate(query, options, function (err, doc) {
        err ? res.status(404).send(err) : res.send(doc);
      })
    } else {
      res.status(400).send({message: config.get('router.messages.10')})
    }
  });

  return router;
};
