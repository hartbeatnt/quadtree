const Rectangle = require('./rectangle');

module.exports = class Quadtree {
  constructor(boundary=new Rectangle(), capacity = 10) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.storage = new Map();
    this.ne = null;
    this.nw = null;
    this.sw = null;
    this.se = null;
  }
}