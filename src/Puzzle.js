'use strict';

var Puzzle = function() {
  this.threeLitreBeaker = new Beaker(3);
  this.fiveLitreBeaker = new Beaker(5);
};

Puzzle.prototype.pour = function(beakerFrom, beakerTo) {
  var water = beakerFrom.currentCapacity;
  var capacity = beakerTo.maximumCapacity - beakerTo.currentCapacity;
  if(water > capacity) {
    beakerTo.fillup();
    beakerFrom.currentCapacity -= capacity;
  } else {
    beakerTo.currentCapacity += water;
    beakerFrom.empty();
  }
};

Puzzle.prototype.gameOver = function() {
  return this.fiveLitreBeaker.currentCapacity == 4;
};
