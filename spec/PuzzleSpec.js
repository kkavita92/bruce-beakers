'use strict';

describe("Puzzle", function() {

  var puzzle;
  var threeLitreBeaker;
  var fiveLitreBeaker;

  beforeEach(function() {
    puzzle = new Puzzle;
    threeLitreBeaker = puzzle.threeLitreBeaker;
    fiveLitreBeaker = puzzle.fiveLitreBeaker;
  });

  describe("#fillup", function() {
    it("can fill beakers to maximum capacity", function() {
      puzzle.fillup(threeLitreBeaker);
      puzzle.fillup(fiveLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(3);
      expect(fiveLitreBeaker.currentCapacity).toEqual(5);
    });

    it("should not allow full beaker to be filled", function() {
      puzzle.fillup(threeLitreBeaker);
      puzzle.fillup(fiveLitreBeaker);
      expect(function(){ puzzle.fillup(threeLitreBeaker); }).toThrow(new Error('Beaker is already full'));
      expect(function(){ puzzle.fillup(fiveLitreBeaker); }).toThrow(new Error('Beaker is already full'));
    });
  });

  describe("#empty", function() {
    beforeEach(function() {
      puzzle.fillup(threeLitreBeaker);
      puzzle.fillup(fiveLitreBeaker);
    });

    it("can empty beakers completely", function() {
      puzzle.empty(threeLitreBeaker);
      puzzle.empty(fiveLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(0);
      expect(fiveLitreBeaker.currentCapacity).toEqual(0);
    });

    it("should not allow emptied beaker to be emptied", function() {
      puzzle.empty(threeLitreBeaker);
      puzzle.empty(fiveLitreBeaker);
      expect(function(){ puzzle.empty(threeLitreBeaker); }).toThrow(new Error('Beaker is already empty'));
      expect(function(){ puzzle.empty(fiveLitreBeaker); }).toThrow(new Error('Beaker is already empty'));
    });
  });

});
