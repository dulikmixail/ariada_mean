const chamberService = require('../../services/crud_services/chamber.service');
const departmentService = require('../../services/crud_services/department.service');

module.exports = new Promise((resolve, reject) => {
  departmentService.find({}, (findErr, findDepartments) => {
    if (!findErr) {
      const countChambersInDepartment = 20;
      let chambers = [];

      findDepartments.forEach(findDepartment => {
        for (let i = 1; i <= countChambersInDepartment; i++) {
          chambers.push({
            title: 'Палата N' + i,
            department: findDepartment._id
          })
        }
      });

      chamberService.create(chambers, (createErr, createChambers) => {
        createErr ? reject(createErr) : resolve(createChambers)
      })
    } else {
      reject(findErr);
    }
  });
});
