const crudRouters = [
  {
    service: 'assessment_of_functional_capability.service',
    path: '/assessment_of_functional_capabilities'
  },
  {
    service: 'balneological_procedure.service',
    path: '/balneological_procedures'
  },
  {
    service: 'branch.service',
    path: '/branches'
  },
  {
    service: 'calculation.service',
    path: '/calculations'
  },
  {
    service: 'chamber.service',
    path: '/chambers'
  },
  {
    service: 'contraindications.service',
    path: '/contraindications'
  },
  {
    service: 'criterion.service',
    path: '/criteria'
  },
  {
    service: 'department.service',
    path: '/departments'
  },
  {
    service: 'diary_of_self_control.service',
    path: '/diary_of_self_controls'
  },
  {
    service: 'diet.service',
    path: '/diets'
  },
  {
    service: 'employee.service',
    path: '/employees'
  },
  {
    service: 'ev_eff_ad_p_b_measurement.service',
    path: '/ev_eff_ad_p_b_measurements'
  },
  {
    service: 'ev_eff_adaptation_potential_bayevsky.service',
    path: '/ev_eff_adaptation_potential_bayevskies'
  },
  {
    service: 'ev_eff_by_ind_of_sp_and_hr_measurement.service',
    path: '/ev_eff_by_ind_of_sp_and_hr_measurements'
  },
  {
    service: 'ev_eff_by_indicators_of_SP_and_HR.service',
    path: '/ev_eff_by_indicators_of_sp_and_hrs'
  },
  {
    service: 'ev_eff_k_ind_measurement.service',
    path: '/ev_eff_k_ind_measurements'
  },
  {
    service: 'ev_eff_kerdo_index.service',
    path: '/ev_eff_kerdo_indexes'
  },
  {
    service: 'ev_eff_orth_t_measurement.service',
    path: '/ev_eff_orth_t_measurements'
  },
  {
    service: 'ev_eff_orthostatic_test.service',
    path: '/ev_eff_orthostatic_tests'
  },
  {
    service: 'ev_eff_r_ind_measurement.service',
    path: '/ev_eff_r_ind_measurements'
  },
  {
    service: 'ev_eff_robinson_index.service',
    path: '/ev_eff_robinson_indexes'
  },
  {
    service: 'examination.service',
    path: '/examinations'
  },
  {
    service: 'exercise_therapy_and_mechanotherapy_group.service',
    path: '/exercise_therapy_and_mechanotherapy_groups'
  },
  {
    service: 'exercise_therapy_and_mechanotherapy_item.service',
    path: '/exercise_therapy_and_mechanotherapy_items'
  },
  {
    service: 'gender.service',
    path: '/genders'
  },
  {
    service: 'history_incoming.service',
    path: '/incoming_histories'
  },
  {
    service: 'how_incoming.service',
    path: '/how_incomings'
  },
  {
    service: 'indeks_skibinskoy_measurement.service',
    path: '/indeks_skibinskoy_measurements'
  },
  {
    service: 'kors_za_klapchuka_measurement.service',
    path: '/kors_za_klapchuka_measurements'
  },
  {
    service: 'level_of_physical_health_by_apanasenk_measurement.service',
    path: '/level_of_physical_health_by_apanasenk_measurements'
  },
  {
    service: 'limitation_of_units.service',
    path: '/limitation_of_units'
  },
  {
    service: 'm_allowed.service',
    path: '/m_alloweds'
  },
  {
    service: 'm_allowed_contraindications.service',
    path: '/m_allowed_contraindications'
  },
  {
    service: 'm_allowed_level.service',
    path: '/m_allowed_levels'
  },
  {
    service: 'm_allowed_sub_contraindications.service',
    path: '/m_allowed_sub_contraindications'
  },
  {
    service: 'm_cl_group.service',
    path: '/m_cl_groups'
  },
  {
    service: 'm_cl_value.service',
    path: '/m_cl_values'
  },
  {
    service: 'm_classifier.service',
    path: '/m_classifiers'
  },
  {
    service: 'm_duration.service',
    path: '/m_durations'
  },
  {
    service: 'm_scheme.service',
    path: '/m_schemes'
  },
  {
    service: 'm_treatment.service',
    path: '/m_treatments'
  },
  {
    service: 'martine_kushelevsky_measurement.service',
    path: '/martine_kushelevsky_measurements'
  },
  {
    service: 'massage.service',
    path: '/massages'
  },
  {
    service: 'measurement.service',
    path: '/measurements'
  },
  {
    service: 'mode_of_motor_activity.service',
    path: '/mode_of_motor_activities'
  },
  {
    service: 'number_unit.service',
    path: '/number_units'
  },
  {
    service: 'nutritionist.service',
    path: '/nutritionists'
  },
  {
    service: 'ph_r_allowed.service',
    path: '/ph_r_alloweds'
  },
  {
    service: 'ph_r_f_l_i_title.service',
    path: '/ph_r_f_l_i_titles'
  },
  {
    service: 'ph_r_f_l_i_title_and_values.service',
    path: '/ph_r_f_l_i_title_and_values'
  },
  {
    service: 'ph_r_f_l_i_value.service',
    path: '/ph_r_f_l_i_values'
  },
  {
    service: 'ph_r_f_l_info.service',
    path: '/ph_r_f_l_infos'
  },
  {
    service: 'ph_r_f_l_s_of_ex_image.service',
    path: '/ph_r_f_l_s_of_ex_images'
  },
  {
    service: 'ph_r_f_l_set_of_exercises.service',
    path: '/ph_r_f_l_set_of_exercises'
  },
  {
    service: 'ph_r_f_l_title.service',
    path: '/ph_r_f_l_titles'
  },
  {
    service: 'ph_r_f_level.service',
    path: '/ph_r_f_levels'
  },
  {
    service: 'ph_r_form.service',
    path: '/ph_r_forms'
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
    service: 'physical_performance.service',
    path: '/physical_performances'
  },
  {
    service: 'physical_rehabilitation.service',
    path: '/physical_rehabilitations'
  },
  {
    service: 'physiotherapy_equipment.service',
    path: '/physiotherapy_equipments'
  },
  {
    service: 'post.service',
    path: '/posts'
  },
  {
    service: 'psychological_status.service',
    path: '/psychological_statuses'
  },
  {
    service: 'psychologist.service',
    path: '/psychologists'
  },
  {
    service: 'rc_records.service',
    path: '/rc_records'
  },
  {
    service: 'rehabilitation_card.service',
    path: '/rehabilitation_card'
  },
  {
    service: 'reviews.service',
    path: '/reviews'
  },
  {
    service: 'rufye_measurement.service',
    path: '/rufye_measurements'
  },
  {
    service: 'self_service.service',
    path: '/self_services'
  },
  {
    service: 'treatment.service',
    path: '/treatments'
  },
  {
    service: 'type_incoming.service',
    path: '/type_incomings'
  },
  {
    service: 'unit_of_measure.service',
    path: '/unit_of_measures'
  },
  {
    service: 'user.service',
    path: '/users'
  },
  {
    service: 'user_profile.service',
    path: '/user_profiles'
  },
  {
    service: 'water_therapy.service',
    path: '/water_therapies'
  },
];

const routers = [];
crudRouters.forEach(value => {
  routers.push(require('./crud.router')(value.service, value.path));
});

routers.push(require('./patient.router')('patient.service', '/patients'));

module.exports = routers;
