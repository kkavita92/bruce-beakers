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

});
