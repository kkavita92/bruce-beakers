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

  describe("#pour", function() {
    beforeEach(function() {
      puzzle.fillup(threeLitreBeaker);
      puzzle.fillup(fiveLitreBeaker);
    });

    it("allows pouring when amount of space greater than water", function() {
      puzzle.empty(fiveLitreBeaker);
      puzzle.pour(threeLitreBeaker, fiveLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(0);
      expect(fiveLitreBeaker.currentCapacity).toEqual(3);
    });

    it("allows pouring when amount of water greater than space", function() {
      puzzle.empty(threeLitreBeaker);
      puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
      expect(threeLitreBeaker.currentCapacity).toEqual(3);
      expect(fiveLitreBeaker.currentCapacity).toEqual(2);
    });

    it("should not allow empty beaker to be poured from", function() {
      puzzle.empty(threeLitreBeaker);
      puzzle.empty(fiveLitreBeaker);
      expect(function(){ puzzle.pour(threeLitreBeaker, fiveLitreBeaker); }).toThrow(new Error('Beaker is already empty'));
    });

    it("should not allow full beaker to be poured into", function() {
      expect(function(){ puzzle.pour(threeLitreBeaker, fiveLitreBeaker); }).toThrow(new Error('Beaker is already full'));
    });
  });

  describe("#gameOver", function() {
    it("returns true when puzzle is solved", function() {
      puzzle.fillup(fiveLitreBeaker);
      puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
      puzzle.empty(threeLitreBeaker);
      puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
      puzzle.fillup(fiveLitreBeaker);
      puzzle.pour(fiveLitreBeaker, threeLitreBeaker);
      expect(puzzle.gameOver()).toBe(true);
    });
  });

});
