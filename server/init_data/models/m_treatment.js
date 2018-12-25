const M_Treatment = require('../../models/all/m_treatment');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    M_Treatment,
    [
        {
            title: 'Малий',
            duration: [10, 12]
        },
        {
            title: 'Середній',
            duration: [14, 16]
        },
        {
            title: 'Максимальний',
            duration: [16, 20]
        },
    ]
);