module.exports = function (MongooseModel, populateFieldsName) {
//Create
  let exportObject = {};
  exportObject.create = function (data, callback) {
    MongooseModel
      .create(data, callback);
  };

//Read
  exportObject.find = function (filter, callback) {
    populate(MongooseModel.find(filter, callback))
  };

  exportObject.findById = function (id, callback) {
    populate(MongooseModel.findById(id, callback))
  };

//Update
  exportObject.update = function (filter, data, callback) {
    populate(MongooseModel.update(filter, data, callback))
  };

//Delete
  exportObject.delete = function (id, callback) {
    populate(MongooseModel.findOneAndDelete(id, callback))
  };

  exportObject.deleteAll = function (callback) {
    MongooseModel.deleteMany({}, callback)
  };

  function populate(model) {
    if (Array.isArray(populateFieldsName)) {
      populateFieldsName.forEach(field => {
        model.populate(field)
      });
    }
  }

  return exportObject;
};

