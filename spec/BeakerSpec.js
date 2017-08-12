'use strict';

describe("Beaker", function() {

  var beaker;

  beforeEach(function() {
    beaker = new Beaker(3);
  });

  it("returns maximum capacity of beaker", function() {
    expect(beaker.maximumCapacity).toEqual(3);
  });

  describe("current capacity of beaker", function() {
    it("initialises as zero", function() {
      expect(beaker.currentCapacity).toEqual(0);
    });
  });

  describe("#fillup", function() {
    it("can fill beaker to maximum capacity", function() {
      beaker.fillup();
      expect(beaker.currentCapacity).toEqual(3);
    });
  });


});
