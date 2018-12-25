const Self_Service = require('../../models/all/m_treatment');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Self_Service,
    [
        {title: 'Не обмежена'},
        {title: 'З використанням допоміжних засобів'},
        {title: 'З використанням допоміжних засобів та з допомогою інших осіб'},
        {title: 'Не здатність до самообслуговування та повна залежність від інших осіб'},
    ]
);