var destroy = require('../lib/destroy');
var middlebot = require('middlebot');
var sinon = require('sinon');
var expect = require('chai').use(require('sinon-chai')).expect;

describe('OSS destroy middleware', function () {
  var index;

  beforeEach(function () {
    index = { destroy: sinon.stub().yields() };
  });

  it('should destroy a new object', function (done) {
    var app = middlebot();

    app.use(destroy({ index: index }));
    app.handle('default', { query: { id: 10 } }, {}, function (err, req, res) {
      if (err) return done(err);
      expect(index.destroy).to.be.calledWith({ id: 10 });
      done();
    });
  });
});