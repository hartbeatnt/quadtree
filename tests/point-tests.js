var { assert, spyOn} = require('../utils');
var Point = require('../point');

module.exports = () => {
  console.log('\n````````````````````');
  console.log('```````POINT````````\n');
  assert(!!Point, true, 'Point exists');
  try {
    var point0 = new Point();
  } catch(err) {
    console.log(err);
  }
  assert(point0.x, 0, 'Point defaults to 0 if no x is supplied');
  assert(point0.y, 0, 'Point defaults to 0 if no y is supplied');
  try {
    var point1 = new Point(2,3);
  } catch(err) {
    console.log(err);
  }
  assert(point1.x, 2, 'Point takes an x parameter');
  assert(point1.y, 3, 'Point takes an y parameter');
}