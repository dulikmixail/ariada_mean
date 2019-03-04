const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const config = require('config');

const mongoose = require('../mongoose-connection');


const storage = new GridFsStorage({
  db: mongoose.connect,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        } else {
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: config.get('mongo.bucketName')
          };
          resolve(fileInfo);
        }
      });
    });
  }
});

let gridFSBucket;
// Init gridFSBucket
mongoose.connect.then(() => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: config.get('mongo.bucketName')})
});

module.exports.upload = multer({storage});

module.exports.getAll = function () {
  return new Promise((resolve, reject) => {
    gridFSBucket.find().toArray((err, files) => {
      if (err) reject(err);

      if (!files || files.length === 0) {
        reject({
          message: 'No files exist'
        });
      } else {
        resolve(files);
      }
    });
  });
};


module.exports.getOneByName = function (filename) {
  return new Promise((resolve, reject) => {
    gridFSBucket.find({filename: filename}).toArray((err, files) => {
      if (err) reject(err);

      if (!files || files.length === 0) {
        reject({
          message: 'No file exist'
        });
      } else {
        resolve(files[0]);
      }
    });
  })
};

module.exports.getImageByNameWithDownloadStream = function (filename) {
  return new Promise((resolve, reject) => {
    gridFSBucket.find({filename: filename}).toArray((err, files) => {
      if (err) reject(err);

      if (!files || files.length === 0) {
        reject({
          message: 'No image exist'
        });
      } else {
        // Check if image
        if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png') {
          // Read output to browser
          const downloadStream = gridFSBucket.openDownloadStreamByName(files[0].filename);
          resolve(
            {
              image: files[0],
              downloadStream: downloadStream
            });
        } else {
          reject({
            message: 'Not an image'
          });
        }
      }
    });

  })
};

module.exports.deleteById = function (id) {
  return new Promise((resolve, reject) => {
    gridFSBucket.delete(new mongoose.mongo.ObjectID(id), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          message: 'File deleted'
        })
      }
    });

  })
};

module.exports.deleteByName = function (name) {
  const uploadStream = gridFSBucket.openUploadStream(name);
  const id = uploadStream.id;
  return module.exports.deleteById(id)
};
