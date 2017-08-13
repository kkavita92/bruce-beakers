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
  var waterAvailable = beakerFrom.currentCapacity;
  var capacityAvailable = beakerTo.maximumCapacity - beakerTo.currentCapacity;
  if (waterAvailable > capacityAvailable) {
    this.fillup(beakerTo);
    beakerFrom.currentCapacity -= capacityAvailable;
  } else {
    beakerTo.currentCapacity += waterAvailable;
    this.empty(beakerFrom);
  }
};

Puzzle.prototype.gameOver = function() {
  return this.fiveLitreBeaker.currentCapacity == 4;
};
