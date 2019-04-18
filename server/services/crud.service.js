const config = require('config');
module.exports = function (MongooseModel) {
// Create
  const exportObject = {};
  exportObject.create = function (data, callback) {
    MongooseModel.create(data, callback);
  };

// Read
  exportObject.find = function (filter, callback, limit) {
    MongooseModel
      .find(filter, callback)
      .limit(limit || config.get('mongo.limit.find'))
  };

  exportObject.findById = function (id, callback) {
    MongooseModel.findById(id, callback)
  };

  exportObject.findOne = function (filter, callback) {
    MongooseModel.findOne(filter, callback)
  };

// Update
  exportObject.update = function (filter, data, callback) {
    MongooseModel.update(filter, data, callback)
  };

// Delete
  exportObject.delete = function (filter, callback) {
    MongooseModel.findOneAndDelete(filter, (error, doc) => {
      if (!error && !!doc) {
        doc.remove();
      }
      callback(error, doc);
    })
  };

  exportObject.deleteAll = function (callback) {
    MongooseModel.deleteMany({}, callback)
  };

// Filter
  exportObject.filter = function (filter, callback, limit) {
    MongooseModel
      .find(filter, callback)
      .limit(limit || config.get('mongo.limit.filter'))
  };

// Search
  exportObject.search = function (searchText, callback, limit) {
    MongooseModel
      .find({$text: {$search: searchText}}, callback)
      .limit(limit || config.get('mongo.limit.search'))
  };
  exportObject.searchPaginate = function (searchText, options, callback) {
    if (!MongooseModel.paginate) {
      callback({message: config.get('router.messages.11')})
    } else {
      MongooseModel
        .paginate({$text: {$search: searchText}}, options, callback)
    }
  };
//Pagination
  exportObject.paginate = function (query, options, callback) {
    if (!MongooseModel.paginate) {
      callback({message: config.get('router.messages.11')})
    } else {
      MongooseModel
        .paginate(query, options, callback)
    }
  };

  return exportObject;
};

