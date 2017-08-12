'use strict';

var Beaker = function(capacity) {
  this.maximumCapacity = capacity;
  this.currentCapacity = 0;
};

Beaker.prototype.fillup = function() {
  // if (this.isFull) throw new Error('Beaker is already full');
  this.currentCapacity = this.maximumCapacity;
};

Beaker.prototype.empty = function() {
  if (this.isEmpty()) throw new Error('Beaker is already empty');
  this.currentCapacity = 0;
};

Beaker.prototype.isFull = function() {
  this.currentCapacity == this.maximumCapacity;
};

Beaker.prototype.isEmpty = function() {
  return this.currentCapacity == 0;
};
