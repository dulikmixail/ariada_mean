const overrideCrudRouters = [
  {
    service: 'patient.service',
    path: '/patients',
    router: 'patient.router'
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
