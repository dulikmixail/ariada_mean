// process.env.NODE_ENV = 'test';
const mongoose = require('../mongoose-connection');
mongoose.connect.then(() => {
  Promise.all(
    [
      // require('./models/employee.testdata'),
      // require('./models/patient.testdata'),
      // require('./models/user.testdata'),
      // require('./models/department.testdata')
      new Promise((resolveDepartment, rejectDepartment) => {
        require('./models/department.testdata')
          .catch(rejectDepartment)
          .then(() => {
            require('./models/chamber.testdata')
              .catch(rejectDepartment)
              .then(() => {
                require('./models/bed.testdata')
                  .catch(rejectDepartment)
                  .then(() => {
                    resolveDepartment();
                  });
              })
          });
      })
    ]
  )
    .catch(() => {
      console.log('Load test data  FAIL!');
      process.exit()
    })
    .then(() => {
      console.log('Load test data load SUCCESS!');
      process.exit()
    });
});
