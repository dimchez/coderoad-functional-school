describe('03 console.log', function() {

  if (process.env.TASK_POSITION !== '4') {
    it('should begin with an index', function() {
      expect(spy).to.have.been.called.with('1/10  A  95  Relational Databases');
      expect(spy).to.have.been.called.with('10/10  C  77  Networks');
    });
  }

});
