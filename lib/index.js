'use strict';

/**
 * Middlewares to index using oss
 */

module.exports = {
  index: index,
  removeFromIndex: removeFromIndex
};

/**
 * Index a resource
 *
 * @param {function} options.createIndex called
 * to start indexing
 * @return {function} index middleware
 */
function index(options) {

  /**
   * @param {integer} res.body.id
   */
  return function (err, req, res, next) {
    options.createIndex(res.body.id, function (err) {
      next(err);
    });
  };
}

/**
 * Remove a resource from the index
 *
 * @param {function} options.removeIndex called
 * to start removing from index
 * @return {function} remove index middleware
 */
function removeFromIndex(options) {

  /**
   * @param {integer} res.body.id
   */
  return function (err, req, res, next) {
    options.removeIndex(res.body.id, function (err) {
      next(err);
    });
  };
}
