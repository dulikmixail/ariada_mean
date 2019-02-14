const mongoose = require('../mongoose-connection');

mongoose.connect.then(() => {
  require('./delete_all_model').then(() => {
    Promise.all(
      [
        require('./plan')
      ]
    ).then(() => {
      console.log('Data initialization successful');
      process.exit()
    })
  });
});
