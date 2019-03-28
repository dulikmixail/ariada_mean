//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const app = require('../index');
const uploadsUrl = '/api/upload';
const downloadUrl = '/api/download';
const filesUrl = '/api/files';
const issueToken = require('./helpers/issueToken');

chai.use(chaiHttp);
const expect = chai.expect;
const authLine = `Bearer ${issueToken({_id: 1})}`;

function expectUploadFile(err, res) {
  expect(err).to.be.null;
  expect(res).to.have.status(200);
  expect(res.body).to.haveOwnProperty('file');
  expect(res.body.file).to.haveOwnProperty('filename');
  expect(res.body.file).to.haveOwnProperty('id');
  expect(res.body.file.filename).to.be.a('string');
  expect(res.body.file.id).to.be.a('string');
}

function expectGetAllFile(err, res) {
  expect(err).to.be.null;
  expect(res).to.have.status(200);
  expect(res.body).to.be.an('array').that.not.be.empty;
}

describe('Upload File Router', function () {
  this.timeout(5000);

  const testFilePath = './server/test_data/images/qrcode.png';

  it('Upload File', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);
        const uploadFileName = res.body.file.filename;

        chai.request(app)
          .get(`${filesUrl}/name/${uploadFileName}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expect(err1).to.be.null;
            expect(res1).to.have.status(200);
            expect(res1.body).to.haveOwnProperty('filename');
            expect(res1.body.filename).to.be.a('string');
            expect(res1.body.filename).to.be.eql(uploadFileName);
            done()
          });
      });
  });

  it('Download File By Name', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);
        const uploadFileName = res.body.file.filename;

        chai.request(app)
          .get(`${downloadUrl}/${uploadFileName}`)
          .set('Authorization', authLine)
          .end((err, res) => {
            const fileBuffer = fs.readFileSync(testFilePath);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).instanceOf(Buffer);
            expect(res.body).deep.equal(fileBuffer);
            done();
          });
      });
  });

  it('Delete File By Name', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);
        const uploadFileName = res.body.file.filename;

        chai.request(app)
          .delete(`${filesUrl}/name/${uploadFileName}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expect(err1).to.be.null;
            expect(res1).to.have.status(200);
            done()
          });
      });
  });

  it('Delete File By Id', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);
        const uploadFileId = res.body.file.id;

        chai.request(app)
          .delete(`${filesUrl}/${uploadFileId}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expect(err1).to.be.null;
            expect(res1).to.have.status(200);
            done()
          });
      });
  });

  it('Get All Files', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);

        chai.request(app)
          .get(`${filesUrl}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expectGetAllFile(err1, res1);
            done()
          });
      });
  });

  it('Get File By Id', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);

        chai.request(app)
          .get(`${filesUrl}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expectGetAllFile(err1, res1);
            expect(res1.body[0]).haveOwnProperty('_id');
            const firstFileId = res1.body[0]._id;

            chai.request(app)
              .get(`${filesUrl}/${firstFileId}`)
              .set('Authorization', authLine)
              .end((err2, res2) => {
                expect(err2).to.be.null;
                expect(res2).to.have.status(200);
                expect(res2.body).haveOwnProperty('_id');
                expect(res2.body._id).to.be.eq(firstFileId);
                done();
              })
          });
      });
  });

  it('Get File By Name', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', testFilePath)
      .end((err, res) => {
        expectUploadFile(err, res);

        chai.request(app)
          .get(`${filesUrl}`)
          .set('Authorization', authLine)
          .end((err1, res1) => {
            expectGetAllFile(err1, res1);
            expect(res1.body[0]).haveOwnProperty('filename');
            const firstFileName = res1.body[0].filename;

            chai.request(app)
              .get(`${filesUrl}/name/${firstFileName}`)
              .set('Authorization', authLine)
              .end((err2, res2) => {
                expect(err2).to.be.null;
                expect(res2).to.have.status(200);
                expect(res2.body).haveOwnProperty('filename');
                expect(res2.body.filename).to.be.eq(firstFileName);
                done();
              })
          });
      });
  });
});
