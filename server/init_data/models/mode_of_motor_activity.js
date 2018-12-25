const Mode_Of_Motor_Activity = require('../../models/all/mode_of_motor_activity');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Mode_Of_Motor_Activity,
    [
        {title: 'Щадний'},
        {title: 'Щадно-тренувальний'},
        {title: 'Тренувальний'},
        {title: 'Інтенсивно тренувальний'},

        {title: 'Суворий ліжковий'},
        {title: 'Розширений ліжковий'},
        {title: 'Палатний'},
        {title: 'Вільний'},
    ]
);