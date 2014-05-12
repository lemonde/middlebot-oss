/**
 * Destroy object in the index.
 */

module.exports = function destroyFactory(options) {
  return function destroy(req, res, next) {
    options.data = options.data || function (req, res) {
      return req.query;
    };

    options.index.destroy(options.data(req, res), next);
  };
};