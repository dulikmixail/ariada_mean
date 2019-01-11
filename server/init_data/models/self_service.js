const Self_Service = require('../../services/crud_services/m_treatment.service');
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
