const M_Scheme = require('../../models/all/m_scheme');
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