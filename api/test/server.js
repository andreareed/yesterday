const Glue = require('glue');
const manifest = require('../manifest');

const options = {
  relativeTo: __dirname + '/../src',
};

module.exports = function() {
  return new Promise((resolve, reject) => {
    Glue.compose(
      manifest,
      options,
      function(err, server) {
        if (err) {
          reject(err);
        } else {
          resolve(server);
        }
      }
    );
  });
};
