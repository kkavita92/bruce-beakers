'use strict';

describe("Beaker", function() {

  var beaker;

  beforeEach(function() {
    beaker = new Beaker(3);
  });

  it("returns maximum capacity of beaker", function() {
    expect(beaker.maximumCapacity).toEqual(3);
  });

  it("initialises with current capacity of zero", function() {
    expect(beaker.currentCapacity).toEqual(0);
  });

});
