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

  it('should be possible to return custom data', function (done) {
    var app = middlebot();

    app.use(destroy({ index: index, data: dataFormatter }));
    app.handle('default', { type: 'request' }, { type: 'result' }, function (err, req, res) {
      if (err) return done(err);
      expect(index.destroy).to.be.calledWith({ foo: 'bar' });
      done();
    });

    function dataFormatter(req, res) {
      expect(req.type).to.equal('request');
      expect(res.type).to.equal('result');
      return { foo: 'bar' };
    }
  });
});