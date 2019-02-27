const express = require('express');
const uploadFilesService = require('../services/upload-files.service');

const router = express.Router();


// @route POST /upload
// @desc  Uploads file to DB
router.post('/upload', uploadFilesService.upload.single('file'), (req, res) => {
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
  uploadFilesService.getImageByNameWithDownloadStream(req.params.filename)
    .then(data => {
      res.writeHead(200, {'Content-Type': data.image.contentType});
      data.downloadStream.pipe(res);
    })
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
