//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const {randomBytes} = require('crypto');
const config = require('config');

const app = require('../index');
const noLoginUsers = require('../test_data/no-login-users');
const issueToken = require('./helpers/issueToken');
const userService = require('../services/crud_services/user.service');
const refreshTokenService = require('../services/crud_services/refresh_token.service');

const authUrl = '/api/auth';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/POST Sign Up', function () {
  it('User can successfully Sign Up', (done) => {
    chai.request(app)
      .post(authUrl + '/signup')
      .send({
        login: randomBytes(20).toString(config.get('auth.encoding')),
        password: 'password'
      }).end((err, res) => {
      expect(res).to.have.status(200);
      done();
    })
  });
});

describe('Authorization', function () {
  this.timeout(5000);
  before((done) => {
    Promise.all([
      new Promise((userServiceResolve, userServiceReject) => {
        userService.deleteAll((userServiceErr) => {
          userServiceErr ? userServiceReject(userServiceErr) : userServiceResolve();
        });
      }),
      new Promise((refreshTokenServiceResolve, refreshTokenServiceReject) => {
        refreshTokenService.deleteAll((refreshTokenServiceErr) => {
          refreshTokenServiceErr ? refreshTokenServiceReject(refreshTokenServiceErr) : refreshTokenServiceResolve();
        });
      })
    ]).then(() => {
      require('../test_data/models/user').then(() => {
        done()
      })
    });
  });

  it('User can successfully login', (done) => {
    chai.request(app)
      .post(authUrl + '/login')
      .send(noLoginUsers[0].user).end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.token).to.be.a('string');
      expect(res.body.refreshToken).to.be.a('string');
      done();
    })
  });

  it('User gets 403 on invalid credentials', (done) => {
    chai.request(app)
      .post(authUrl + '/login')
      .send({
        login: 'INVALID',
        password: 'INVALID'
      }).end((err, res) => {
      expect(res).to.have.status(403);
      expect(res.text).to.be.a('string', 'Invalid credentials');
      done();
    })
  });

  it('User receives 401 on expired token', (done) => {
    const expiredToken = issueToken({_id: noLoginUsers[0].user._id}, {expiresIn: '1ms'});
    const authLine = `Bearer ${expiredToken}`;
    chai.request(app)
      .get('/api/employees')
      .set('Authorization', authLine)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done()
      })
  });

  it('User can get new access token using refresh token', (done) => {
    chai.request(app)
      .post(authUrl + '/refresh')
      .send({
        refreshToken: 'REFRESH_TOKEN_0'
      }).end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.token).to.be.a('string');
      expect(res.body.refreshToken).to.be.a('string');
      done();
    })
  });

  it("User get 404 on invalid refresh token", (done) => {
    chai.request(app)
      .post(authUrl + '/refresh')
      .send({
        refreshToken: 'INVALID_REFRESH_TOKEN'
      }).end((err, res) => {
      expect(res).to.have.status(404);
      done();
    })
  });

  it('User can use refresh token only once', (done) => {
    chai.request(app)
      .post(authUrl + '/refresh')
      .send({
        refreshToken: 'REFRESH_TOKEN_1'
      }).end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.token).to.be.a('string');
      expect(res.body.refreshToken).to.be.a('string');

      chai.request(app)
        .post(authUrl + '/refresh')
        .send({
          refreshToken: 'REFRESH_TOKEN_1'
        }).end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
    });
  });

  it('Refresh token become invalid on logout', (done) => {
    chai.request(app)
      .post(authUrl + '/logout')
      .set('Authorization', `Bearer ${issueToken({_id: noLoginUsers[2].user._id})}`)
      .send({refreshToken: noLoginUsers[2].tokens[0]})
      .end((err, res) => {
        expect(res).to.have.status(200);
        chai.request(app)
          .post(authUrl + '/refresh')
          .send({
            refreshToken: noLoginUsers[2].tokens[0]
          }).end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
      });
  });

  it('Multiple refresh token are valid', (done) => {
    chai.request(app)
      .post(authUrl + '/login')
      .send(noLoginUsers[0].user).end((err, res) => {
      expect(res).to.have.status(200);
      chai.request(app)
        .post(authUrl + '/refresh')
        .send({
          refreshToken: res.body.refreshToken
        }).end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.token).to.be.a('string');
        expect(res.body.refreshToken).to.be.a('string')
      });
    });
    chai.request(app)
      .post(authUrl + '/login')
      .send(noLoginUsers[1].user).end((err, res) => {
      expect(res).to.have.status(200);
      chai.request(app)
        .post(authUrl + '/refresh')
        .send({
          refreshToken: res.body.refreshToken
        }).end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.token).to.be.a('string');
        expect(res.body.refreshToken).to.be.a('string');
        done()
      });
    });


  });
});
