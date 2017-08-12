'use strict';

describe("Puzzle", function() {

  var puzzle;
  var threeLitreBeaker;

  beforeEach(function() {
    puzzle = new Puzzle;
    threeLitreBeaker = puzzle.threeLitreBeaker;
  });

  describe("#fillup", function() {
    it("can fill beaker to maximum capacity", function() {
      puzzle.fillup(threeLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(3);
    });

    it("should not allow full beaker to be filled", function() {
      puzzle.fillup(threeLitreBeaker);
      expect(function(){ puzzle.fillup(threeLitreBeaker); }).toThrow(new Error('Beaker is already full'));
    });
  });

  describe("#empty", function() {
    beforeEach(function() {
      puzzle.fillup(threeLitreBeaker);
    });

    it("can empty beaker completely", function() {
      puzzle.empty(threeLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(0);
    });

    it("should not allow emptied beaker to be emptied", function() {
      puzzle.empty(threeLitreBeaker);
      expect(function(){ puzzle.empty(threeLitreBeaker); }).toThrow(new Error('Beaker is already empty'));
    });
  });


});
