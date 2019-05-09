const patientService = require('../../services/crud_services/patient.service');
const genderService = require('../../services/crud_services/gender.service');

module.exports = new Promise((resolve, reject) => {
  genderService.find({}, (err1, genders) => {
      if (!err1) {
        let employees = [];
        for (let i = 0; i < 10000; i++) {
          employees.push(
            {
              surname: 'Фамилия' + i,
              // name: 'Имя' + i,
              name: '1',
              middleName: 'Отчество' + i,
              birthDate: new Date,
              phoneNumbers: [Math.floor(Math.random() * 9000000), Math.floor(Math.random() * 9000000)],
              medicalCardNumber: '№' + i,
              gender: genders[Math.floor(Math.random() * genders.length)],
            },
          )
        }

        patientService.create(employees, (err, result) => {
          !!err ? reject(err) : resolve(result)
        });
      }
  });
});

