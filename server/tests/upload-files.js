//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const uploadsUrl = '/api/upload';
const downloadUrl = '/api/download';
const filesUrl = '/api/files';
const issueToken = require('./helpers/issueToken');

chai.use(chaiHttp);
const expect = chai.expect;
const authLine = `Bearer ${issueToken({_id: 1})}`;

describe('Upload File Router', function () {
  this.timeout(5000);
  it('Upload file', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', './server/test_data/images/qrcode.png')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty('file');
        expect(res.body.file).to.haveOwnProperty('filename');
        expect(res.body.file.filename).to.be.a('string');
        const uploadFileName = res.body.file.filename;

        chai.request(app)
          .get(`${filesUrl}/${uploadFileName}`)
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

  it('Delete file by name', (done) => {
    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .attach('file', './server/test_data/images/qrcode.png')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty('file');
        expect(res.body.file).to.haveOwnProperty('filename');
        expect(res.body.file.filename).to.be.a('string');
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
});
