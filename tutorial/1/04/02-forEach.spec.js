'use strict';

describe('02 console.log', function() {

    it('should begin with an index', function() {
      expect(spy).to.have.been.called.with('1  A  95  Relational Databases');
      expect(spy).to.have.been.called.with('10  C  77  Networks');
    });
    
});
