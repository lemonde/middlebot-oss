/**
 * Create object in the index.
 */

module.exports = function createFactory(options) {
  return function create(req, res, next) {
    options.data = options.data || function (req, res) {
      return res.body;
    };

    options.index.create(options.data(req, res), next);
  };
};