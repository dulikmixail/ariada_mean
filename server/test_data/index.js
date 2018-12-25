const mongoose = require('../mongoose-connection');
mongoose.then(() => {
  Promise.all(
    [
      require('./models/employee')
    ]
  ).then(() => {
    console.log('Test data load successfully!');
    process.exit()
  });
});

