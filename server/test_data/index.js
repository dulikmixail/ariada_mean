// process.env.NODE_ENV = 'test';
const mongoose = require('../mongoose-connection');
mongoose.connect.then(() => {
  Promise.all(
    [
      require('./models/employee'),
      // require('./models/user')
    ]
  ).then(() => {
    console.log('Test data load successfully!');
    process.exit()
  });
});

