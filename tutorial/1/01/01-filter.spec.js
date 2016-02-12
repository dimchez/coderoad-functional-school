var expect = require('chai').expect;
var path = require('path');
// run test file in the context of 01-filter.js
var loadContext = require('../../common/loadContext');
var filePath = path.join(process.env.DIR, '01-filter.js');
// global.data = require(process.env.TUTORIAL_DIR + '/tutorial/data/students').slice(0);

loadContext(filePath);

describe('isAda', function() {

  it('doesn\'t exist', function() {
    expect(isAda).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(isAda).to.be.a('function');
  });

  it('doesn\'t have any params', function() {
    expect(isAda.length).to.equal(1);
  });

  it('doesn\'t return true when an items name matches "Ada Lovelace"', function() {
    var test = [{
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
