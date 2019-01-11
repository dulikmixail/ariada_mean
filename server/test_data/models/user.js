const userService = require('../../services/crud_services/user.service');
const refreshTokenService = require('../../services/crud_services/refresh_token.service');
const cryptoService = require('../../services/crypto.service');
const noLoginUsers = require('../no-login-users');

let userPromises = [];

noLoginUsers.forEach((noLoginUser) => {
  userPromises.push(new Promise((userResolve, userReject) => {
    cryptoService.encryptLoginAndPassword(noLoginUser.user.login, noLoginUser.user.password, (derivedKey) => {
      userService.create({_id: noLoginUser.user._id, login: noLoginUser.user.login, key: derivedKey}, (userServiceErr, createUser) => {
        if (userServiceErr) {
          userReject(userServiceErr);
        } else {
          let tokenPromises = [];
          noLoginUser.tokens.forEach((token) => {
            tokenPromises.push(new Promise((tokenResolve, tokenReject) => {
              refreshTokenService.create(
                {
                  token: token,
                  user: createUser
                },
                (refreshTokenServiceErr) => {
                  if (refreshTokenServiceErr) {
                    tokenReject(refreshTokenServiceErr);
                  } else {
                    tokenResolve(`Success. Test token ${JSON.stringify(token)} for user ${JSON.stringify(noLoginUser)} create.`);
                  }
                }
              )
            }));
          });
          Promise.all(tokenPromises).then((data)=>{
            userResolve(data)
          })
        }
      });
    });
  }));
});

module.exports = Promise.all(userPromises);
