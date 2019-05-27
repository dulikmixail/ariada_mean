const chamberService = require('../../services/crud_services/chamber.service');
const departmentService = require('../../services/crud_services/department.service');

module.exports = new Promise((resolve, reject) => {
  chamberService.find({}, (findErr, findChambers) => {
    if (!findErr) {
      const step = 5;
      let departments = [];
      for (let i = 0, j = 1; i < findChambers.length; i += step, j++) {
        departments.push({
          title: 'Отделение' + j,
          beds: findChambers.slice(i, i + step)
        })
      }
      departmentService.create(departments, (createErr, createDepartments) => {
        !!createErr ? reject(createErr) : resolve(createDepartments)
      })
    } else {
      reject(findErr);
    }
  });
});
