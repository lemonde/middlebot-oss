/**
 * Destroy object in the index.
 */

module.exports = function destroyFactory(options) {
  return function destroy(req, res, next) {
    options.index.destroy(req.query, next);
  };
};