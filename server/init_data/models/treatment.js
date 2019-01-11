const Treatment = require('../../services/crud_services/treatment.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Treatment,
    [
        {title: 'Лікарняний'},
        {title: 'Після лікарняний '},
    ]
);
