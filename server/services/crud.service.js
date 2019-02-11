module.exports = function (MongooseModel) {
//Create
  const exportObject = {};
  exportObject.create = function (data, callback) {
    MongooseModel.create(data, callback);
  };

//Read
  exportObject.find = function (filter, callback) {
    MongooseModel.find(filter, callback)
  };

  exportObject.findById = function (id, callback) {
    MongooseModel.findById(id, callback)
  };

  exportObject.findOne = function (filter, callback) {
    MongooseModel.findOne(filter, callback)
  };

//Update
  exportObject.update = function (filter, data, callback) {
    MongooseModel.update(filter, data, callback)
  };

//Delete
  exportObject.delete = function (filter, callback) {
    MongooseModel.findOneAndDelete(filter, callback)
  };

  exportObject.deleteAll = function (callback) {
    MongooseModel.deleteMany({}, callback)
  };


  return exportObject;
};

