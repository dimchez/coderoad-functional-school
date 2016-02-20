var expect = require('chai').expect;

describe('03 var mySlightlyChanged', function() {

  it('doesn\'t exist', function() {
    expect(mySlightlyChanged).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(mySlightlyChanged).to.be.an('array');
  });

  it('doesn\'t increment scores by 12', function() {
    expect(mySlightlyChanged).to.deep.equal([{
      "title": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 103,
      "grade": "A"
    }, {
      "title": "3D Computer Graphics",
      "instructor": "G.L. Webb",
      "name": "Ada Lovelace",
      "score": 100,
      "grade": "B"
    }, {
      "title": "Front End Web Development",
      "instructor": "Moe Zaick",
      "name": "Ada Lovelace",
      "score": 73,
      "grade": "D"
    }, {
      "title": "Web Security",
      "instructor": "Sue Denim",
      "name": "Ada Lovelace",
      "score": 93,
      "grade": "B"
    }, {
      "title": "Javascript Fundamentals",
      "instructor": "Jay Kweerie",
      "name": "Ada Lovelace",
      "score": 85,
      "grade": "C"
    }, {
      "title": "Data Science",
      "instructor": "Ford Fulkerson",
      "name": "Ada Lovelace",
      "score": 70,
      "grade": "F"
    }, {
      "title": "Algorithm Design",
      "instructor": "Gale Shapely",
      "name": "Ada Lovelace",
      "score": 105,
      "grade": "A"
    }, {
      "title": "Data Abstraction",
      "instructor": "Aster Ricks",
      "name": "Ada Lovelace",
      "score": 94,
      "grade": "B"
    }, {
      "title": "Data Structures",
      "instructor": "Brodal Q.",
      "name": "Ada Lovelace",
      "score": 100,
      "grade": "B"
    }, {
      "title": "Networks",
      "instructor": "Van Emde Boas",
      "name": "Ada Lovelace",
      "score": 77,
      "grade": "D"
    }]);
  });

});
