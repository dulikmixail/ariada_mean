process.env.NODE_ENV = 'test';
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (data, options = {}) => jwt.sign(data, config.get('auth.secret'), options);
