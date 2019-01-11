const promiseHelper = require('../promise_helper');
module.exports = new Promise((resolve, reject) => {
  let servicesPromise = [];
  require('../../services').getCrudServices().forEach((service) => {
    servicesPromise.push(new Promise((resolve2, reject2)=>{
      service.deleteAll((err, res)=>{
        if (err) {
          reject2(err)
        } else {
          resolve2(res)
        }
      });
    }))
  });
  Promise.all(
    servicesPromise
  ).then((values)=>{
    promiseHelper.rejectErr('delete model',values,reject,resolve);
  });
});
