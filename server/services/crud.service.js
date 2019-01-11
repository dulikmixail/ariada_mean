module.exports = function (MongooseModel, populateFieldsName) {
//Create
  const exportObject = {};
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

  exportObject.findOne = function (filter, callback) {
    populate(MongooseModel.findOne(filter, callback))
  };

//Update
  exportObject.update = function (filter, data, callback) {
    populate(MongooseModel.update(filter, data, callback))
  };

//Delete
  exportObject.delete = function (filter, callback) {
    populate(MongooseModel.findOneAndDelete(filter, callback))
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

