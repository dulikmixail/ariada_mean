const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtMiddleware = require('../helpers/jwt');
const cryptoService = require('../services/crypto.service');
const userService = require('../services/crud_services/user.service');
const refreshTokenService = require('../services/crud_services/refresh_token.service');


router.post('/login', function (req, res) {
  const {login, password} = req.body;
  if (!login) {
    res
      .status(400)
      .send({message: 'Login not present'});
  } else if (!password) {
    res
      .status(400)
      .send({message: 'Password not present'});
  } else {
    cryptoService.encryptLoginAndPassword(login, password, (key) => {
      userService.findOne({login: login, key: key}, (userErr, user) => {
        if (userErr || !user) {
          res
            .status(403)
            .send({message: 'Invalid credentials'});
        } else {
          const newRefreshToken = cryptoService.getNewToken();
          refreshTokenService.create(
            {token: newRefreshToken, user: user},
            (refreshTokenErr, refreshToken) => {
              refreshTokenErr ? res.status(505).send({message: refreshTokenErr}) :
                res
                  .status(200)
                  .send({
                    token: jwt.sign({id: user._id}, config.get('auth.secret'), {expiresIn: config.get('auth.expiresIn')}),
                    refreshToken: refreshToken.token
                  });
            });
        }
      });
    });
  }
});

router.post('/signup', function (req, res) {
  const {login, password} = req.body;
  cryptoService.encryptLoginAndPassword(login, password, (key) => {
    userService.create({login: login, key: key}, (userErr) => {
      if (userErr) {
        throw userErr
      } else {
        res.send({message: "Registration completed successfully"}).status(200);
      }
    });
  });
});

router.post('/refresh', function (req, res) {
  const {refreshToken} = req.body;
  refreshTokenService.delete({token: refreshToken}, function (refreshTokenErr, dbRefreshToken) {
    if (!dbRefreshToken) {
      res.status(404).send({message: "Not valid refresh token!"})
    } else {
      res.send({
        token: jwt.sign({id: dbRefreshToken.user._id}, config.get('auth.secret'), {expiresIn: config.get('auth.expiresIn')}),
        refreshToken: cryptoService.getNewToken()
      })
    }
  })
});

router.post('/logout', jwtMiddleware, function (req, res) {
  const id = req.user._id;
  refreshTokenService.delete({user: {_id: id}}, (refreshTokenErr) => {
    refreshTokenErr ? res.status(404).end() : res.end();
  })
});

module.exports = router;

