const Ph_R_F_L_Title = require('../../models/all/ph_r_f_l_title');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Ph_R_F_L_Title,
    [
        {title: 'Режим I (щадний)'},
        {title: 'Режим II (щадно-тренувальний)'},
        {title: 'Режим III (тренувальний)'},
        {title: 'Режим IV (інтенсивно-тренувальний)'},
        {title: 'Режим Суворий Ліжковий'},
        {title: 'Режим Ліжковий'},
        {title: 'Режим Палатний'},
        {title: 'Режим Вільний'},
    ]
);