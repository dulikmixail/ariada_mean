const employeeService = require('../../services/crud_services/employee.service');
const postService = require('../../services/crud_services/post.service');
const branchService = require('../../services/crud_services/branch.service');

module.exports = new Promise((resolve, reject) => {
  postService.find({}, (err1, posts) => {
    branchService.find({}, (err2, branches) => {
      if (!err1 && !err2) {
        let employees = [];
        console.log(posts);
        console.log(branches);
        for (let i = 40000; i < 50000; i++) {
          employees.push(
            {
              itemNo: i,
              employmentDate: '2012-04-23',
              surname: 'Фамилия' + i,
              name: 'Имя' + i,
              middleName: 'Отчество' + i,
              birthDate: new Date,
              residencePlace: 'Постоянное место жительства' + i,
              photo: '645df43034dd5122bf2792daa7a5f62f.png',
              branch: branches[Math.floor(Math.random() * branches.length)],
              post: posts[Math.floor(Math.random() * posts.length)]
            },
          )
        }

        employeeService.create(employees, (err, result) => {
          !!err ? reject(err) : resolve(result)
        });
      }


    })
  });
});

