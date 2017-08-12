'use strict';

var Beaker = function(capacity) {
  this.maximumCapacity = capacity;
  this.currentCapacity = 0;
};

Beaker.prototype.isFull = function() {
  return this.currentCapacity == this.maximumCapacity;
};

Beaker.prototype.isEmpty = function() {
  return this.currentCapacity == 0;
};
