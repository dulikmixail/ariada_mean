const mongoose = require('../mongoose-connection');
const config = require('config');

let gridFSBucket;
// Init gridFSBucket
mongoose.connect.then(() => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: config.get('mongo.bucketName')})
});


module.exports.getAll = function () {
  return new Promise((resolve, reject) => {
    gridFSBucket.find().toArray((err, files) => {
      if (err) reject(err);

      if (!files || files.length === 0) {
        reject({
          message: 'No files exist'
        });
      }
      resolve(files);
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
      }
      resolve(files[0]);
    });
  })
};

module.exports.getImageByName = function (filename) {
  return new Promise((resolve, reject) => {
    gridFSBucket.find({filename: filename}).toArray((err, files) => {
      if (err) reject(err);

      if (!files || files.length === 0) {
        reject({
          message: 'No image exist'
        });
      }

      // Check if image
      if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png') {
        resolve(files[0]);
      } else {
        reject({
          message: 'Not an image'
        });
      }
    });

  })
};

module.exports.deleteById = function (id) {
  return new Promise((resolve, reject) => {
    gridFSBucket.delete(new mongoose.mongo.ObjectID(id), (err) => {
      if (err) {
        reject(err);
      }
      resolve({
        message: 'File deleted'
      })
    });

  })
};

module.exports.deleteByName = function (name) {
  const uploadStream = gridFSBucket.openUploadStream(name);
  const id = uploadStream.id;
  return module.exports.deleteById(id)
};
