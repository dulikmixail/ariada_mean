const bedService = require('../../services/crud_services/bed.service');
const chamberService = require('../../services/crud_services/chamber.service');

module.exports = new Promise((resolve, reject) => {
  bedService.find({}, (findErr, findBeds) => {
    if (!findErr) {
      const step = 20;
      let chambers = [];
      for (let i = 0, j = 1; i < findBeds.length; i += step, j++) {
        chambers.push({
          title: 'Палата' + j,
          beds: findBeds.slice(i, i + step)
        })
      }
      chamberService.create(chambers, (createErr, createChambers) => {
        !!createErr ? reject(createErr) : resolve(createChambers)
      })
    } else {
      reject(findErr);
    }
  });
});
