const Assessment_Of_Functional_Capability = require('../../services/crud_services/assessment_of_functional_capability.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Assessment_Of_Functional_Capability,
    [
        {title: 'Хворий перевищує свої функціональні можливості'},
        {title: 'Хворий недооцінює свої функціональні можливості'},
        {title: 'Хворий обєктивно оцінює свої функціональні можливості'},
    ]
);
