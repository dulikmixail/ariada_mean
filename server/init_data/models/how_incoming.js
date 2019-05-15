const HowIncoming = require('../../services/crud_services/how_incoming.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
  HowIncoming,
  [
    {title: 'Вперше'},
    {title: 'Повторно'},
  ]
);
