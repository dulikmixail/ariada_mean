const M_Treatment = require('../../services/crud_services/m_treatment.service');
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
