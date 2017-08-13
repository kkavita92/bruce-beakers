'use strict';

describe("Beaker", function() {

  var beaker;

  beforeEach(function() {
    beaker = new Beaker(3);
  });

  describe("#maximumCapacity", function() {
    it("returns maximum capacity of beaker", function() {
      expect(beaker.maximumCapacity).toEqual(3);
    });
  });

  describe("#currentCapacity", function() {
    it("initialises as zero", function() {
      expect(beaker.currentCapacity).toEqual(0);
    });
  });

  describe("#isFull", function() {
    it("returns true if beaker is full", function() {
      beaker.currentCapacity = 3;
      expect(beaker.isFull()).toBe(true);
    });
  });

  describe("#isEmpty", function() {
    it("returns true if beaker is empty", function() {
      expect(beaker.isEmpty()).toBe(true);
    });
  });

});
