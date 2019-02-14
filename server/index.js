const express = require('express');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const config = require('config');
const multer = require('multer');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const errorHandler = require('./helpers/error-handler');
const responseHandler = require('./helpers/response-handler');

const mongoose = require('./mongoose-connection');
const router = require('./routes/index.router');

const distDir = '../dist/client';


// Init gfs
let gfs;
// Init storage
let storage;

mongoose.connect.then(database => {
  console.log('Database connected.');

// Init stream
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection('uploads');
  // Create storage engine
  storage = new GridFsStorage({
    db: database,
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
});


const upload = multer({storage});

// @route POST /upload
// @desc  Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

// @route GET /files
// @desc  Display all files in JSON
app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
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
app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        message: 'No file exists'
      });
    }
    // File exists
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc Display Image
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        message: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        message: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
app.delete('/files/:id', (req, res) => {
  gfs.remove({_id: req.params.id, root: 'uploads'}, (err, gridStore) => {
    if (err) {
      return res.status(404).json({err: err});
    }

    res.redirect('/');
  });
});

app.set('port', config.get('server.port') || process.env.PORT || 3000);

// не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'production') {
  // morgan для вывода логов в консоль
  app.use(morgan('combined')); // 'combined' выводит логи в стиле apache
}


app.use(compression());
app.use(express.urlencoded({extended: false, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
// secure apps by setting various HTTP headers
app.use(helmet());


if (app.get('env') === 'production' || config.util.getEnv('NODE_ENV') === 'production') {
  console.log('Static files: ', path.join(__dirname, distDir));
  app.use(express.static(path.join(__dirname, distDir)));
  app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
  });

}
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'uploads')));
console.log('Static files: ', path.join(__dirname, 'uploads'));
app.use(responseHandler);
app.use(errorHandler);


const server = app.listen(app.get('port'), () => {
  console.log(`Server  is running  localhost:${app.get('port')}. (${process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEFAULT'} MODE);`);
});
server.setTimeout(5000);

module.exports = app; // for testing
