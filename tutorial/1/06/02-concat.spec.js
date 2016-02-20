describe('02 var doubleArray', function() {

  it('should call map twice', function() {
    expect(spyMap).to.have.been.called.twice;
  });

  it('should create an array of arrays', function() {
    var result = courses.map(function(course) {
      return course.students.map(function(student) {
        return {
          title: course.title,
          instructor: course.instructor,
          name: student.name,
          score: student.score,
          grade: student.grade
        };
      });
    });
    expect(doubleArray).to.deep.equal(result);
  });

});
