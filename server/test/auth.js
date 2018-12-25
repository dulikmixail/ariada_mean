//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const baseUrl = '/api/auth';

chai.use(chaiHttp);
const expect = chai.expect;
describe('Authorization', ()=> {
  it('User can successfully login', (done) => {
    chai.request(app)
      .post(baseUrl + '/login')
      .send({
        login: 'user',
        password: 'user'
      }).end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.token).to.be.a('string');
      expect(res.body.refreshToken).to.be.a('string');
      done();
    })
  });
  it('User gets 403 on invalid credentials');
  it('User receives 403 on expired token');
  it('User can refresh access token using refresh token');
  it('User can use refresh token only once');
  it('Refresh token become invalid on logout');
  it('Multiple refresh token are valid');
});
