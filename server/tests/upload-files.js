//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const app = require('../index');
const uploadsUrl = '/api/upload';
const downloadUrl = '/api/download';
const issueToken = require('./helpers/issueToken');

chai.use(chaiHttp);
const expect = chai.expect;
const authLine = `Bearer ${issueToken({_id: 1})}`;

describe('Upload Files', () => {
  it('read image and upload', (done) => {
    const file = fs.readFileSync(path.join(__dirname, '/test_data/images/qrcode.png'));
    const formData = new FormData();
    formData.append('file', file);

    chai.request(app)
      .post(uploadsUrl)
      .set('Authorization', authLine)
      .send(formData)
      .then(() => {
        chai.request(app)
          .get(uploadsUrl)
          .set('Authorization', authLine)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });

  })
});
