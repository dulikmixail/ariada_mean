const crudRouters = [
  {
    service: 'assessment_of_functional_capability.service',
    path: '/assessment_of_functional_capabilities'
  },
  {
    service: 'branch.service',
    path: '/branches'
  },
  {
    service: 'employee.service',
    path: '/employees'
  },
  {
    service: 'post.service',
    path: '/posts'
  },
  {
    service: 'exercise_therapy_and_mechanotherapy_item.service',
    path: '/exercise_therapy_and_mechanotherapy_items'
  },
  {
    service: 'user.service',
    path: '/users'
  },
  {
    service: 'refresh_token.service',
    path: '/refresh_tokens'
  },
  {
    service: 'ph_r_group.service',
    path: '/ph_r_groups'
  },
  {
    service: 'ph_r_sub_group.service',
    path: '/ph_r_sub_groups'
  },
  {
    service: 'ph_r_allowed.service',
    path: '/ph_r_alloweds'
  },
  {
    service: 'treatment.service',
    path: '/treatments'
  },
  {
    service: 'self_service.service',
    path: '/self_services'
  },
  {
    service: 'psychological_status.service',
    path: '/psychological_statuses'
  },
  {
    service: 'criterion.service',
    path: '/criteria'
  },
  {
    service: 'assessment_of_functional_capability.service',
    path: '/assessment_of_functional_capabilities'
  }
];

const routers = [];
crudRouters.forEach(value => {
  routers.push(require('./crud.router')(value.service, value.path));
});

module.exports = routers;
