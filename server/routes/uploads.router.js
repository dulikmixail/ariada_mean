const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');
const config = require('config');
const mongoose = require('../mongoose-connection');
const uploadFilesService = require('../services/upload-files.service');

const router = express.Router();

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
          bucketName: config.get('mongo.bucketName')
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
  uploadFilesService.getAll()
    .then(files => res.json(files))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route GET /files/:filename
// @desc  Display single file object
router.get('/files/:filename', (req, res) => {
  uploadFilesService.getOneByName(req.params.filename)
    .then(file => res.json(file))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route GET /image/:filename
// @desc Display Image
router.get('/images/:filename', (req, res) => {
  uploadFilesService.getImageByName(req.params.filename)
    .then(image => res.json(image))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', (req, res) => {
  uploadFilesService.deleteById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/name/:name', (req, res) => {
  uploadFilesService.deleteByName(req.params.name)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: err.message}));
});


module.exports = router;
