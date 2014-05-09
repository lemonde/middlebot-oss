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
});