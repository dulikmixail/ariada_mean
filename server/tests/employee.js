//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const employeesUrl = '/api/employees';
const issueToken = require('./helpers/issueToken');
const employeeService = require('../services/crud_services/employee.service');

chai.use(chaiHttp);
const expect = chai.expect;
const authLine = `Bearer ${issueToken({_id: 1})}`;

describe('/GET employees', () => {
  beforeEach((done) => {
    employeeService.deleteAll((err)=> {
      if(!err) {
        done();
      }
    });
  });

  it('it should PUT and GET two employees', function (done) {
    const employeesReq = [
      {
        "branch": [],
        "reviews": [],
        "_id": "5c2217decd419a080c7b0fc8",
        "itemNo": 2,
        "employmentDate": "2012-04-23T00:00:00.000Z",
        "surname": "Фамилия2",
        "name": "Имя2",
        "middleName": "Отчество2",
        "birthDate": "2018-12-25T11:43:26.229Z",
        "residencePlace": "Постоянное место жительства2",
        "educationFile": "url/url/2.jpg",
        "post": "5c2121ca70919e2df816336f",
        "login": "employee2",
        "password": "123456789"
      },
      {
        "branch": [],
        "reviews": [],
        "_id": "5c2217decd419a080c7b0fca",
        "itemNo": 4,
        "employmentDate": "2012-04-23T00:00:00.000Z",
        "surname": "Фамилия4",
        "name": "Имя4",
        "middleName": "Отчество4",
        "birthDate": "2018-12-25T11:43:26.229Z",
        "residencePlace": "Постоянное место жительства4",
        "educationFile": "url/url/4.jpg",
        "post": "5c2121ca70919e2df816336f",
        "login": "employee4",
        "password": "123456789"
      }
    ];
    const employeesRes = [
      {
        "branch": [],
        "reviews": [],
        "_id": "5c2217decd419a080c7b0fc8",
        "itemNo": 2,
        "employmentDate": "2012-04-23T00:00:00.000Z",
        "surname": "Фамилия2",
        "name": "Имя2",
        "middleName": "Отчество2",
        "birthDate": "2018-12-25T11:43:26.229Z",
        "residencePlace": "Постоянное место жительства2",
        "educationFile": "url/url/2.jpg",
        "post": "5c2121ca70919e2df816336f",
        "login": "employee2"
      },
      {
        "branch": [],
        "reviews": [],
        "_id": "5c2217decd419a080c7b0fca",
        "itemNo": 4,
        "employmentDate": "2012-04-23T00:00:00.000Z",
        "surname": "Фамилия4",
        "name": "Имя4",
        "middleName": "Отчество4",
        "birthDate": "2018-12-25T11:43:26.229Z",
        "residencePlace": "Постоянное место жительства4",
        "educationFile": "url/url/4.jpg",
        "post": "5c2121ca70919e2df816336f",
        "login": "employee4"
      }
    ];
    chai.request(app)
      .post(employeesUrl)
      .set('Authorization', authLine)
      .send(employeesReq)
      .then(() => {
        chai.request(app)
          .get(employeesUrl)
          .set('Authorization', authLine)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.have.length(2);
            expect(res.body).to.eql(employeesRes);
            done();
          });
      });
  });
});