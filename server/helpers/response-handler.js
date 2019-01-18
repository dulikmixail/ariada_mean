module.exports = responseHandler;

function responseHandler(req, res) {
  res.status(404).send({message: "Page not found"});
}
