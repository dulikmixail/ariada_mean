const chamberService = require('../../services/crud_services/chamber.service');
const bedService = require('../../services/crud_services/bed.service');

module.exports = new Promise((resolve, reject) => {
  chamberService.find({}, (findErr, findChambers) => {
    if (!findErr) {
      const countBedsInChamber = 5;
      let beds = [];

      findChambers.forEach(findChamber => {
        for (let i = 1; i <= countBedsInChamber; i++) {
          beds.push(
            {
              title: 'Ліжко ' + i,
              chamber: findChamber._id
            },
          )
        }
      });

      bedService.create(beds, (errBeds, createBeds) => {
        errBeds ? reject(errBeds) : resolve(createBeds)
      })
    } else {
      reject(findErr);
    }
  });
});
