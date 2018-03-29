const Quadtree = require('./quadtree');
const Rectangle = require('./rectangle');


console.log('````````````````````');
console.log('``````UTILITY``````\n');
assert(1,1,'assert function functional');

console.log('````````````````````');
console.log('`````RECTANGLE`````\n');
assert(!!Rectangle, true, 'Rectangle exists');

console.log('````````````````````');
console.log('``````QUADTREE`````\n');
assert(!!Quadtree, true, 'Quadtree exists');

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