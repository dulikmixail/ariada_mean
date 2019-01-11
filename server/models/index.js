module.exports.getAllModels = function () {
    let normalizedPath = require("path").join(__dirname, "all");
    let requiredModels = [];

    require("fs").readdirSync(normalizedPath).forEach(file => {
        requiredModels.push(require("./all/" + file))
    });

    return requiredModels;
};
