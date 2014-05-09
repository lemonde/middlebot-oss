/**
 * Create object in the index.
 */

module.exports = function createFactory(options) {
  return function create(req, res, next) {
    options.index.create(res.body, next);
  };
};