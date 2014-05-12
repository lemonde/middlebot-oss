var create = require('../lib/create');
var middlebot = require('middlebot');
var sinon = require('sinon');
var expect = require('chai').use(require('sinon-chai')).expect;

describe('OSS create middleware', function () {
  var index;

  beforeEach(function () {
    index = { create: sinon.stub().yields() };
  });

  it('should create a new object', function (done) {
    var app = middlebot();

    app.use(create({ index: index }));
    app.handle('default', {}, { body: { id: 10 } }, function (err, req, res) {
      if (err) return done(err);
      expect(index.create).to.be.calledWith({ id: 10 });
      done();
    });
  });

  it('should be possible to return custom data', function (done) {
    var app = middlebot();

    app.use(create({ index: index, data: dataFormatter }));
    app.handle('default', { type: 'request' }, { type: 'result' }, function (err, req, res) {
      if (err) return done(err);
      expect(index.create).to.be.calledWith({ foo: 'bar' });
      done();
    });

    function dataFormatter(req, res) {
      expect(req.type).to.equal('request');
      expect(res.type).to.equal('result');
      return { foo: 'bar' };
    }
  });
});