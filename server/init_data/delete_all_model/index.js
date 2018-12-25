require('../../models').getAllModel().forEach(model => {
   model.deleteAll();
});