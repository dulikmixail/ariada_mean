const Mode_Of_Motor_Activity = require('../../services/crud_services/mode_of_motor_activity.service');
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
