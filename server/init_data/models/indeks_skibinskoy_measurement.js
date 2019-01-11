const Indeks_Skibinskoy_Measurement = require('../../services/crud_services/indeks_skibinskoy_measurement.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Indeks_Skibinskoy_Measurement,
    [
        {
            mark: 5,
            title: 'Відмінний',
            description: 'Функціональні резерви серцево-судиної і дихалатної систем в чудовій формі',
            value: 'Більше 40'
        },
        {
            mark: 4,
            title: 'Добрий',
            description: 'Функціональні резерви серцево-судиної і дихалатної систем в нормі',
            value: '30-60'
        },
        {
            mark: 3,
            title: 'Середній',
            description: 'Можна говорити про недостатні функціональні можливості серцево-судиної і дихалатної систем',
            value: '10-30'
        },
        {
            mark: 2,
            title: 'Поганий',
            description: 'Функціональні можливості серцево-судиної і ди халатної систем слабкі .Знижня стійкість до гіпоксії',
            value: '5-10'
        },
        {
            mark: 1,
            title: 'Поганий',
            description: 'Функціональні можливості серцево-судиної і дихалатної систем край слабкі',
            value: 'Менше 5'
        }
    ]
);
