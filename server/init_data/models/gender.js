const Genders = require('../../services/crud_services/gender.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
  Genders,
  [
    {title: 'Чоловік'},
    {title: 'Жінка'},
  ]
);
