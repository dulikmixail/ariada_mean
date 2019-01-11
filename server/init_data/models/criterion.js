const Criterion = require('../../services/crud_services/criterion.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Criterion,
    [
        {title: 'Стан пацієнта відмінний'},
        {title: 'Медично стабільний або відносно стабільний'},
        {title: 'У пацієнта спостерігається одне чи два персистуючі фізичні обмеження'},
        {title: 'Пацієнт здатен до навчання'},
        {title: 'Пацієнт спроможний сидіти з підтримкою протягом, принаймні, однієї години, та приймати мінімальну участь у реабілітаційних інтервенціях'},
    ]
);
