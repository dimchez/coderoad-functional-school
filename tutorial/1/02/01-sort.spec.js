var expect = require('chai').expect;
var loadJS = require('./common/loadJS').default;
if (!global.myBest) {
  global.myBest = JSON.parse(JSON.stringify(require('./1/02/myBest.json')));
}
loadJS('02-sort.js');

describe('01 function compareScore', function () {
  it('doesn\'t exist', function() {
    expect(compareScore).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(compareScore).to.be.a('function');
  });

  it('doesn\'t have two params', function() {
    expect(compareScore.length).to.equal(2);
  });

  it('doesn\'t return 1 when b\'s score is more than a\'s', function() {
    expect(compareScore({score: 3}, {score: 5})).to.equal(1);
  });
});
