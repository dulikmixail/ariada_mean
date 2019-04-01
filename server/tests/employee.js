//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../index');
const employeesUrl = '/api/employees';
const postsUrl = '/api/posts';
const branchesUrl = '/api/branches';
const issueToken = require('./helpers/issueToken');
const employeeService = require('../services/crud_services/employee.service');
const postService = require('../services/crud_services/post.service');
const branchService = require('../services/crud_services/branch.service');

chai.use(chaiHttp);
const expect = chai.expect;
const authLine = `Bearer ${issueToken({_id: 1})}`;

describe('/GET employees', function () {
  this.timeout(5000);
  beforeEach((done) => {
    employeeService.deleteAll((err) => {
      if (!err) {
        postService.deleteAll((err1) => {
          if (!err1) {
            branchService.deleteAll((err2) => {
              if (!err2) {
                done();
              }
            })
          }
        });
      }
    });
  });

  it('it should PUT and GET two employees', function (done) {
    const postModel = {
      _id: new mongoose.mongo.ObjectId().toHexString(),
      title: 'TestPost1'
    };
    const branchModel = {
      _id: new mongoose.mongo.ObjectId().toHexString(),
      title: 'TestBranch1'
    };
    const employeeModels = [
      {
        _id: new mongoose.mongo.ObjectId().toHexString(),
        itemNo: 2,
        employmentDate: "2012-04-23T00:00:00.000Z",
        surname: "Фамилия2",
        name: "Имя2",
        middleName: "Отчество2",
        birthDate: "2018-12-25T11:43:26.229Z",
        residencePlace: "Постоянное место жительства2",
        educationFile: "url/url/2.jpg",
        post: postModel._id,
        branch: branchModel._id,
        reviews: []
      },
      {
        _id: new mongoose.mongo.ObjectId().toHexString(),
        itemNo: 4,
        employmentDate: "2012-04-23T00:00:00.000Z",
        surname: "Фамилия4",
        name: "Имя4",
        middleName: "Отчество4",
        birthDate: "2018-12-25T11:43:26.229Z",
        residencePlace: "Постоянное место жительства4",
        educationFile: "url/url/4.jpg",
        post: postModel._id,
        branch: branchModel._id,
        reviews: []
      }
    ];
    chai.request(app)
      .post(postsUrl)
      .set('Authorization', authLine)
      .send(postModel)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        chai.request(app)
          .post(branchesUrl)
          .set('Authorization', authLine)
          .send(branchModel)
          .end((err1, res1) => {
            expect(err1).to.be.null;
            expect(res1).to.have.status(200);
            chai.request(app)
              .post(employeesUrl)
              .set('Authorization', authLine)
              .send(employeeModels)
              .end((err2, res2) => {
                expect(err2).to.be.null;
                expect(res2).to.have.status(200);
                chai.request(app)
                  .get(employeesUrl)
                  .set('Authorization', authLine)
                  .end((err3, res3) => {
                    expect(err3).to.be.null;
                    expect(res3).to.have.status(200);
                    expect(res3.body).to.have.length(2);
                    expect(res3.body).to.eql(employeeModels);
                    done();
                  });
              });
          })
      });

  });
});
