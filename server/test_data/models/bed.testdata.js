const bedService = require('../../services/crud_services/bed.service');

module.exports = new Promise((resolve, reject) => {
  let beds = [];
  for (let i = 0; i < 1000; i++) {
    beds.push(
      {
        title: 'Ліжко ' + i,
      },
    )
  }
  bedService.create(beds, (err, result) => {
    !!err ? reject(err) : resolve(result)
  })
});
