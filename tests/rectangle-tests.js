var { assert, spyOn} = require('../utils');
var Rectangle = require('../rectangle');

module.exports = () => {
  console.log('\n````````````````````');
  console.log('`````RECTANGLE`````\n');
  assert(!!Rectangle, true, 'Rectangle exists');

  try {
    var rec0 = new Rectangle();
  } catch(err) {
    console.log(err);
  }
  assert(rec0.x, 1, 'Rectangle x defaults to 1 when no x is supplied');
  assert(rec0.y, 1, 'Rectangle y defaults to 1 when no y is supplied');
  assert(rec0.w, 1, 'Rectangle w defaults to 1 when no w is supplied');
  assert(rec0.h, 1, 'Rectangle h defaults to 1 when no h is supplied');

  try {
    var rec1 = new Rectangle(2,3,4,5);
    assert(rec1.x, 2, 'Rectangle can take a x property');
    assert(rec1.y, 3, 'Rectangle can take a y property');
    assert(rec1.w, 4, 'Rectangle can take a w property');
    assert(rec1.h, 5, 'Rectangle can take a h property');
  } catch(err) {
    console.log(err);
  }
}