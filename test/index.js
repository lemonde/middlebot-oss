'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
chai.use(require('sinon-chai'));
chai.use(require('chai-things'));

var ossMiddlewares = require('../lib');

describe('index middlewares', function () {
  var indexers, res;

  beforeEach(function () {
    res = {
      body: {
        id: 1
      }
    };

    indexers = {
      index: function(){},
      removeFromIndex: function(){}
    };

    sinon.stub(indexers, 'index');
    sinon.stub(indexers, 'removeFromIndex');
  });

  afterEach(function () {
    indexers.index.restore();
    indexers.removeFromIndex.restore();
  });

  describe('#index', function () {
    it('should index a resource', function (done) {
      indexers.index.callsArgWith(1, null);
      ossMiddlewares.index({createIndex: indexers.index})
      (null, {}, res, function(err) {
        if (err) return done(err);
        expect(indexers.index).to.be.calledOnce;
        expect(indexers.index).to.be.calledWith(1);
        done();
      });
    });
  });

  describe('#removeFromIndex', function () {
    it('should remove a resource from indexes', function (done) {
      indexers.removeFromIndex.callsArgWith(1, null);
      ossMiddlewares.removeFromIndex({removeIndex: indexers.removeFromIndex})
      (null, {}, res, function(err) {
        if (err) return done(err);
        expect(indexers.removeFromIndex).to.be.calledOnce;
        expect(indexers.removeFromIndex).to.be.calledWith(1);
        done();
      });
    });
  });
});

