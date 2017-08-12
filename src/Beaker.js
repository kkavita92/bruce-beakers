'use strict';

var Beaker = function(capacity) {
  this.maximumCapacity = capacity;
  this.currentCapacity = 0;
};

Beaker.prototype.fillup = function() {
  this.currentCapacity = this.maximumCapacity;
};

Beaker.prototype.empty = function() {
  this.currentCapacity = 0;
};
