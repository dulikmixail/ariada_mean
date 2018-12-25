const Unit_Of_Measure = require('../../models/all/unit_of_measure');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Unit_Of_Measure,
    [
        {
            name: 'крок в хвилину',
            shortName: 'кр/хв'
        },
        {
            name: 'хвилина',
            shortName: 'хв'
        },
        {
            name: 'метр в секунду',
            shortName: 'м/сек'
        },
        {
            name: 'килокалорий',
            shortName: 'ккал'
        },
        {
            name: 'градус Цельсія',
            shortName: 'С'
        },
        {
            name: 'година',
            shortName: 'г'
        },
        {
            name: 'штук',
            shortName: 'шт'
        },
        {
            name: 'метрів',
            shortName: 'м'
        },
    ]
);