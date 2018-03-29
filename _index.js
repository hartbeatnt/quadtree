const quadtree = require('./quadtree');

console.log('````````````````````');
console.log('`````QUADTREE```````\n');
assert(1,1,'assert function functional');
assert(!!quadtree, true, 'quadtree exists');

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