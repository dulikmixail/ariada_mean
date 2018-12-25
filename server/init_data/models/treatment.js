const Treatment = require('../../models/all/treatment');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Treatment,
    [
        {title: 'Лікарняний'},
        {title: 'Після лікарняний '},
    ]
);