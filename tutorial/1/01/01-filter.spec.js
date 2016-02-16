"use strict";
var expect = require('chai').expect;
var path = require('path');

if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students.json')));
}

var loadJS = require('../../common/loadJS').default;
loadJS('01-filter.js');

describe('function isAda', function() {

  it('doesn\'t exist', function() {
    expect(isAda).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(isAda).to.be.a('function');
  });

  it('doesn\'t have any params', function() {
    expect(isAda.length).to.equal(1);
  });

  it('doesn\'t return a boolean', function () {
    expect(isAda({name: 'Ada'})).to.be.a('boolean');
  });

  it('should match for name', function () {
    let regex1 = /\.name/;
    let regex2 = /\[.name.\]/;
    let string = isAda.toString();
    let result = !!string.match(regex1) || !!string.match(regex2);
    expect(result).to.be.true;
  });

  it('requires the full name "Ada Lovelace"', function () {
    let regex = /Ada Lovelace/;
    let string = isAda.toString();
    expect(!!string.match(regex)).to.be.true;
  });

  it('doesn\'t match student.name to "Ada Lovelace"', function() {
    let test = [{
      name: 'Jane'
    }, {
      name: 'Joe'
    }, {
      name: 'Ada Lovelace'
    }];
    expect(test.filter(isAda)).to.deep.equal([{
      name: "Ada Lovelace"
    }]);
  });

});
