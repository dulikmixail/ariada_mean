const expressJwt = require('express-jwt');
const config = require('config');

module.exports = expressJwt({
  secret: config.get('auth.secret')
});
