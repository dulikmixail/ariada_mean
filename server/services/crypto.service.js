const {pbkdf2,randomBytes} = require('crypto');
const config = require('config');

module.exports.encryptLoginAndPassword = function (login, password, callback) {
  pbkdf2(login + password, config.get('auth.salt'), config.get('auth.iterations'), config.get('auth.keylen'), config.get('auth.digest'), (err, derivedKey) => {
    if (err) throw err;
    callback(derivedKey);
  });
};

module.exports.getNewToken = function () {
  return randomBytes(config.get('auth.tokenlen')).toString(config.get('auth.encoding'));
};
