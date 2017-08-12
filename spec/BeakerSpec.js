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

    it("should not allow full beaker to be filled", function() {
      beaker.fillup();
      expect(function(){ beaker.fillup(); }).toThrow(new Error('Beaker is already full'));
    });
  });

  describe("#empty", function() {
    beforeEach(function() {
      beaker.fillup();
    });

    it("can empty beaker completely", function() {
      beaker.empty();
      expect(beaker.currentCapacity).toEqual(0);
    });

    it("should not allow emptied beaker to be emptied", function() {
      beaker.empty();
      expect(function(){ beaker.empty(); }).toThrow(new Error('Beaker is already empty'));
    });
  });


});
