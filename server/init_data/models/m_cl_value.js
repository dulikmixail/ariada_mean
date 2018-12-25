const M_Cl_Value = require('../../models/all/m_cl_value');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    M_Cl_Value,
    [
        {title: 'Лікувальний'},
        {title: 'Гігієнічний'},
        {title: 'Спортивний'},
        {title: 'Косметичний'},

        {title: 'Мануальний масаж'},
        {title: 'Апаратний масаж'},
        {title: 'Гідромасаж'},
        {title: 'Вібромасаж'},

        {title: 'Масажист'},
        {title: 'Самомасаж'},

        {title: 'Класичний масаж'},
        {title: 'Сегментарно-рефлекторний масаж'},

        {title: 'Заспокійливий'},
        {title: 'Збудлививий'},
    ]
);
