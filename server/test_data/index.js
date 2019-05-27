// process.env.NODE_ENV = 'test';
const mongoose = require('../mongoose-connection');
mongoose.connect.then(() => {
  Promise.all(
    [
      // require('./models/employee.testdata'),
      // require('./models/patient.testdata'),
      // require('./models/user.testdata'),
      // require('./models/bed.testdata'),
      // require('./models/chamber.testdata'),
      // require('./models/department.testdata'),
    ]
  ).then(() => {
    console.log('Test data load successfully!');
    process.exit()
  });
});
