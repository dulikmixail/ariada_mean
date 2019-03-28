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

describe('/GET employees', function() {
  this.timeout(5000);
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
        "post": "5c90258d9086f1142bbdf44c"
      },
      {
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
        "post": "5c90258d9086f1142bbdf44d"
      }
    ];
    const employeesRes = [
      {
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
        "post": "5c90258d9086f1142bbdf44c"
      },
      {
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
        "post": "5c90258d9086f1142bbdf44d"
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
