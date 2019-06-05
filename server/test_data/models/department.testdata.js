const departmentService = require('../../services/crud_services/department.service');

module.exports = new Promise((resolve, reject) => {
  const countDepartments = 10;
  let departments = [];

  for (let i = 0; i < countDepartments; i++) {
    departments.push({
      title: 'Отделение' + i,
    })
  }

  departmentService.create(departments, (createErr, createDepartments) => {
    createErr ? reject(createErr) : resolve(createDepartments);
  });
});
