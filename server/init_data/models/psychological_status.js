const Psychological_Status = require('../../services/crud_services/psychological_status.service');
const promiseHelper = require('../promise_helper');

module.exports = promiseHelper.getPromiseCreateModel(
    Psychological_Status,
    [
        {title: 'Хворий психологічно готовий приймати активну участь в реабілітаційній програмі, вірить в її високу ефективність'},
        {title: 'Хворий байдужий до проведення фізичної реабілітації'},
        {title: 'Хворий психологічно не готовий приймати участь в реабілітаційній програмі, не вірить в її ефективність, відмовляється від реабілітації'},
    ]
);
