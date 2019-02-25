const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('../mongoose-connection');

const router = express.Router();


let gridFSBucket;
// Init gridFSBucket
mongoose.connect.then(() => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: 'uploads'});
});


// Create storage engine
const storage = new GridFsStorage({
  db: mongoose.connect,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({storage});

// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({file: req.file});
});

// @route GET /files
// @desc  Display all files in JSON
router.get('/files', (req, res) => {
  gridFSBucket.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

// @route GET /files/:filename
// @desc  Display single file object
router.get('/files/:filename', (req, res) => {
  gridFSBucket.find({filename: req.params.filename}).toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: 'No files exists'
      });
    }
    // File exists
    return res.json(files[0]);
  });
});

// @route GET /image/:filename
// @desc Display Image
router.get('/images/:filename', (req, res) => {
  gridFSBucket.find({filename: req.params.filename}).toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        message: 'No files exists'
      });
    }

    // Check if image
    if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png') {
      // Read output to browser
      const downloadStream = gridFSBucket.openDownloadStreamByName(files[0].filename);
      res.writeHead(200, {'Content-Type': files[0].contentType});
      downloadStream.pipe(res);
    } else {
      res.status(404).json({
        message: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', (req, res) => {
  gridFSBucket.delete(new mongoose.mongo.ObjectID(req.params.id), (err) => {
    if (err) {
      return res.status(404).json({message: err.message});
    }
    res.status(200).json({
      message: 'File deleted'
    })
  });
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/name/:name', (req, res) => {
  const uploadStream = gridFSBucket.openUploadStream(req.params.name);
  const id = uploadStream.id;
  gridFSBucket.delete(id, (err) => {
    if (err) {
      return res.status(404).json({message: err.message});
    }
    res.status(200).json({
      message: 'File deleted'
    })
  });
});



module.exports = router;
