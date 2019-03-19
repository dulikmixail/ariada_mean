const employeeService = require('../../services/crud_services/employee.service');
const postService = require('../../services/crud_services/post.service');

module.exports = new Promise((resolve, reject) => {
  postService.find({}, (err, posts) => {
    let employees = [];
    for (let i = 0; i < 10; i++) {
      employees.push(
        {
          itemNo: i,
          employmentDate: '2012-04-23',
          surname: 'Фамилия' + i,
          name: 'Имя' + i,
          middleName: 'Отчество' + i,
          birthDate: new Date,
          residencePlace: 'Постоянное место жительства' + i,
          educationFile: 'url/url/' + i + '.jpg',
          post: posts[Math.floor(Math.random() * posts.length)]
        },
      )
    }

    employeeService.create(employees, (err, result)=>{
      !!err ? reject(err): resolve(result)
    });
  });
});

