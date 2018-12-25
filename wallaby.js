module.exports = function () {
  return {
    files: [
      'server/**/*.js',
      'config/*.json',
      {pattern: 'server/test/**/*.js', ignore: true}
    ],

    tests: [
      'server/test/**/*.js'
    ],
    env: {type: 'node'},
    testFramework: 'mocha',
    workers: {
      initial: 1,
      regular: 1,
      recycle: false
    }
  };
};
