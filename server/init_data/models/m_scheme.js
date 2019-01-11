const M_Scheme = require('../../services/crud_services/m_scheme.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    M_Scheme,
    [
        {
            title: 'Заспокійлива методика',
        },
        {
            title: 'Помірно-заспокійлива методикою',
        },
        {
            title: 'Збудлива методика',
        },
        {
            title: 'Помірно-збудлива методика',
        },
        {
            title: 'Гармонізуюча методика',
        },
    ]
);
