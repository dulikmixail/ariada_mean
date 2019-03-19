const express = require('express');
const uploadFilesService = require('../services/upload-files.service');
const jwtMiddleware = require('../helpers/jwt');
const multer = require('multer');
const config = require('config');

const router = express.Router();


// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', jwtMiddleware, (req, res) => {
  uploadFilesService.upload.single('file')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      switch (err.code) {
        case 'LIMIT_FILE_SIZE':
          res.status(413).json({message: err.message});
          break;
        case 'LIMIT_UNEXPECTED_FILE':
          res.status(400).json({message: err.message});
          break;
        default:
          res.status(400).json({message: err.message});
      }
    } else if (err) {
      res.status(500).json({message: config.get('router.messages.0')});
    } else {
      res.json({file: req.file});
    }
  });
});

// @route GET /download
// @desc  Downloads file from DB
router.get('/download/:filename', (req, res) => {
  uploadFilesService.getFileByNameWithDownloadStream(req.params.filename)
    .then(data => {
      res.writeHead(200, {'Content-Type': data.file.contentType});
      data.downloadStream.pipe(res);
    })
    .catch(err => res.status(404).json({message: err.message}));
});

// @route GET /files
// @desc  Display all files in JSON
router.get('/files', jwtMiddleware, (req, res) => {
  uploadFilesService.getAll()
    .then(files => res.json(files))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route GET /files/:filename
// @desc  Display single file object
router.get('/files/:filename', jwtMiddleware, (req, res) => {
  uploadFilesService.getOneByName(req.params.filename)
    .then(file => res.json(file))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route GET /image/:filename
// @desc Display Image
router.get('/images/:filename', jwtMiddleware, (req, res) => {
  uploadFilesService.getImageByNameWithDownloadStream(req.params.filename)
    .then(data => {
      res.writeHead(200, {'Content-Type': data.image.contentType});
      data.downloadStream.pipe(res);
    })
    .catch(err => res.status(404).json({message: err.message}));
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/:id', jwtMiddleware, (req, res) => {
  uploadFilesService.deleteById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: err.message}));
});

// @route DELETE /files/:id
// @desc  Delete file
router.delete('/files/name/:name', jwtMiddleware, (req, res) => {
  uploadFilesService.deleteByName(req.params.name)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({message: err.message}));
});


module.exports = router;
