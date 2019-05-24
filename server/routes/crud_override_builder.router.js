const overrideCrudRouters = [
  {
    service: 'patient.testdata.js.service',
    path: '/patients',
    router: 'patient.testdata.js.router'
  },
  {
    service: 'employee.service',
    path: '/employees',
    router: 'employee.router'
  }
];

const routers = [];

overrideCrudRouters.forEach(value => {
  const overrideRouter = require(`./${value.router}`)(value.service, value.path);
  routers.push(overrideRouter);
});

module.exports = routers;
