module.exports = errorHandler;

function errorHandler(err, req, res) {
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).send({ message: err });
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).send({ message: 'Invalid Token' });
  }

  // default to 500 server error
  return res.status(500).send({ message: err.message });
}
