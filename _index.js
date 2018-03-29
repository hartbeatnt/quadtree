const Quadtree = require('./quadtree');
const Rectangle = require('./rectangle');
const Point = require('./point');


console.log('\n````````````````````');
console.log('``````UTILITY``````\n');
assert(1,1,'assert function functional');
assert(typeof spyOn, "function", "spyOn util exists");
const fn = () => "spy on me";
const spy = spyOn(fn);
assert(typeof spy, "function", "spyon returns a function");
assert(spy(), "spy on me", "spy should return what spied on function would return");
assert(spy.callCount(), 1, "callCount should increment when spied function is called")

console.log('\n````````````````````');
console.log('```````POINT````````\n');
assert(!!Point, true, 'Point exists');
const point0 = new Point();
assert(point0.x, 0, 'Point defaults to 0 if no x is supplied');
assert(point0.y, 0, 'Point defaults to 0 if no y is supplied');
const point1 = new Point(2,3);
assert(point1.x, 2, 'Point takes an x parameter');
assert(point1.y, 3, 'Point takes an y parameter');

console.log('\n````````````````````');
console.log('`````RECTANGLE`````\n');
assert(!!Rectangle, true, 'Rectangle exists');

const rec0 = new Rectangle();
assert(rec0.x, 1, 'Rectangle x defaults to 1 when no x is supplied');
assert(rec0.y, 1, 'Rectangle y defaults to 1 when no y is supplied');
assert(rec0.w, 1, 'Rectangle w defaults to 1 when no w is supplied');
assert(rec0.h, 1, 'Rectangle h defaults to 1 when no h is supplied');

const rec1 = new Rectangle(2,3,4,5);
assert(rec1.x, 2, 'Rectangle can take a x property');
assert(rec1.y, 3, 'Rectangle can take a y property');
assert(rec1.w, 4, 'Rectangle can take a w property');
assert(rec1.h, 5, 'Rectangle can take a h property');

console.log('\n````````````````````');
console.log('``````QUADTREE`````\n');
assert(!!Quadtree, true, 'Quadtree exists');

const qtree = new Quadtree(rec0, 4);
assert(qtree.boundary.x, 1, "QuadTree takes a Rectangle as a boundary argument");
assert(qtree.capacity, 4, "QuadTree takes a capacity argument");
assert(Array.isArray(qtree.entities), true, "Quadtree has an array of contained entities");
assert(qtree.hasOwnProperty('nw') 
  && qtree.hasOwnProperty('ne') 
  && qtree.hasOwnProperty('se') 
  && qtree.hasOwnProperty('sw'), 
  true, "Quadtree has properties for 4 child QuadTrees")
assert(typeof qtree.insert, 'function', "Quadtree has an insert method");
try {
  for (let i = 0; i < 4; i++) {
    qtree.insert(new Point(i % 2 / 2, Math.floor(i / 2) / 2));
  }
} catch (err){
  console.log('\n',err,'\n');
}
assert(qtree.entities.length, 4, 
  "QuadTree adds children to entities array on inserting up to capacity");
assert(qtree.nw || qtree.ne  || qtree.se || qtree.sw, false, 
  'QuadTree should not spawn any children until reaching its capacity');

try {
  for (let i = 0; i < 4; i++) {
    qtree.insert(new Point( 
      1 / 4 + i % 2 / 2, 
      1 / 4 + Math.floor(i / 2) / 2
    ));
  }
} catch (err){
  console.log('\n',err,'\n');
}
assert(qtree.entities.length, 8, 
  "QuadTree increases entity length property on insert beyond capacity");
assert(qtree.nw instanceof Quadtree
  && qtree.nw instanceof Quadtree
  && qtree.nw instanceof Quadtree
  && qtree.nw instanceof Quadtree,
  true, "QuadTree creates children quadtrees when grown past capacity");
try {
  assert(qtree.nw.entities.length === 2
    && qtree.nw.entities.length === 2
    && qtree.nw.entities.length === 2
    && qtree.nw.entities.length === 2,
    true, "QuadTree children add entities to their arrays after formation");
} catch(err) {
  console.log('\n',err)
}

console.log('\n\n');

function assert(statement, expectation, describe) {
  console.log(statement === expectation
    ? '.'
    : 'x',
    describe,
    ':',
    statement,
    '<->',
    expectation
  );
}

function spyOn(fn1) {
  let called = 0;
  const fn2 = (...args) => {
    called ++;
    return fn1(...args);
  };
  fn2.callCount = () => called;
  return fn2;
}