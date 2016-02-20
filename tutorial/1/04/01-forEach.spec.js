'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var path = require('path');
var loadJS = require('./common/loadJS').default;

if (!global.myFixed) {
  global.myFixed = JSON.parse(JSON.stringify(require('./1/04/myFixed.json')));
}

var spy = chai.spy.on(console, 'log');
loadJS('04-forEach.js');

describe('01 console.log', function() {

    it('should be called 10 times', function() {
      expect(spy).to.have.been.called.with('A  95  Relational Databases');
      expect(spy).to.have.been.called.with('C  77  Networks');
    });

});
