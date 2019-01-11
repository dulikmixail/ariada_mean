const Refresh_Token = require('../../models/all/refresh_token.model');
module.exports = require('../crud.service')(Refresh_Token, ['user']);
