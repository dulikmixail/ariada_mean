const promiseHelper = require('./promise_helper');

module.exports = new Promise((resolve, reject) => {
  Promise.all(
    [
      require('./models/user'),
      require('./models/post'),
      require('./models/ph_r_group__ph_r_sub_group'),
      require('./models/assessment_of_functional_capability'),
      require('./models/criterion'),
      require('./models/treatment'),
      require('./models/ph_r_allowed'),
      require('./models/m_duration'),
      require('./models/m_treatment'),
      require('./models/indeks_skibinskoy_measurement'),
      require('./models/self_service'),
      require('./models/psychological_status'),
      require('./models/gender'),
      new Promise((resolve, reject) => {
        Promise.all(
          [
            require('./models/ph_r_f_l_i_title'),
            require('./models/ph_r_f_l_i_value'),
            require('./models/ph_r_f_l_title')
          ]
        ).then(() => {
          Promise.all(
            [
              require('./models/ph_r_f_l_i_title_and_values'),
              require('./models/ph_r_form'),
            ]
          ).then((values) => {
            promiseHelper.rejectErr('init data',values, reject, resolve)
          });

        });
      }),
      new Promise((resolve, reject) => {
        Promise.all(
          [
            require('./models/m_allowed_contraindications')
          ]
        ).then(() => {
          Promise.all(
            [
              require('./models/m_allowed')
            ]
          ).then((values) => {
            promiseHelper.rejectErr('init data',values, reject, resolve)
          });
        });
      }),
      new Promise((resolve, reject) => {
        Promise.all(
          [
            require('./models/m_cl_value')
          ]
        ).then(() => {
          Promise.all(
            [
              require('./models/m_classifier')
            ]
          ).then(() => {
            Promise.all(
              [
                require('./models/m_cl_group')
              ]
            ).then(values => {
              promiseHelper.rejectErr('init data',values, reject, resolve)
            })
          })
        });
      }),
      new Promise((resolve, reject) => {
        Promise.all(
          [
            require('./models/mode_of_motor_activity')
          ]
        ).then(() => {
          Promise.all(
            [
              require('./models/physical_performance')
            ]
          ).then((values) => {
            promiseHelper.rejectErr('init data',values, reject, resolve)
          });
        });
      }),
      new Promise((resolve, reject) => {
        Promise.all(
          [
            require('./models/unit_of_measure'),
            require('./models/limitation_of_units')
          ]
        ).then(() => {
          Promise.all(
            [
              require('./models/exercise_therapy_and_mechanotherapy_item')
            ]
          ).then((values) => {
            promiseHelper.rejectErr('init data',values, reject, resolve)
          });
        });
      })
    ]
  ).then((values) => {
    promiseHelper.rejectErr('init data',values, reject, resolve)
  });
});
