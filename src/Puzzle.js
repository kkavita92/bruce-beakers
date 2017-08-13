'use strict';

var Puzzle = function() {
  this.threeLitreBeaker = new Beaker(3);
  this.fiveLitreBeaker = new Beaker(5);
};

Puzzle.prototype.fillup = function(beaker) {
  if (beaker.isFull()) throw new Error('Beaker is already full');
  beaker.currentCapacity = beaker.maximumCapacity;
};

Puzzle.prototype.empty = function(beaker) {
  if (beaker.isEmpty()) throw new Error('Beaker is already empty');
  beaker.currentCapacity = 0;
};

Puzzle.prototype.pour = function(beakerFrom, beakerTo) {
  var water = beakerFrom.currentCapacity;
  var capacity = beakerTo.maximumCapacity - beakerTo.currentCapacity;
  if(water > capacity) {
    this.fillup(beakerTo);
    beakerFrom.currentCapacity -= capacity;
  } else {
    beakerTo.currentCapacity += water;
    this.empty(beakerFrom);
  }
};

Puzzle.prototype.gameOver = function() {
  return this.fiveLitreBeaker.currentCapacity == 4;
};
