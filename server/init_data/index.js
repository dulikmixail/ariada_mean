const mongoose = require('../mongoose-connection');

mongoose.then(() => {
  Promise.all(
    [
      require('./plan')
    ]
  ).then(() => {
    console.log('Data initialization successful');
    process.exit()
  })

});
