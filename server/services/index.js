module.exports.getCrudServices = function () {
  const normalizedPath = require("path").join(__dirname, "crud_services");
  let requiredServices = [];

  require("fs").readdirSync(normalizedPath).forEach(file => {
    requiredServices.push(require("./crud_services/" + file))
  });
  return requiredServices;
};
