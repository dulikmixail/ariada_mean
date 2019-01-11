const Limitation_Of_Units = require('../../services/crud_services/limitation_of_units.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Limitation_Of_Units,
    [
        {
            titles: ['від','до']
        },
        {
            titles: ['менше']
        },
        {
            titles: ['більше']
        },
        {
            titles: ['між','і']
        },
        {
            titles: ['близько']
        },
    ]
);
