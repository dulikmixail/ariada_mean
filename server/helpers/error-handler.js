module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).send({message: err});
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).send({message: 'Invalid Token'});
  }
  // default to 500 server error
  console.log('Error log handler (500 server error): ', err.message);
  return res.status(500).send({message: 'Server error'});
}
