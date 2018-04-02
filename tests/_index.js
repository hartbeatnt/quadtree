var util_tests = require('./util-tests.js');
var point_tests = require('./point-tests');
var rectangle_tests = require('./rectangle-tests');
var quadtree_tests = require('./quadtree-tests');

const run = () => {
  console.clear();
  console.log(  '~~~~~~~~~~~~~~~~~~~~'  )
  console.log('\nQUADTREE TEST RUNNER\n');
  
  util_tests();
  point_tests();
  rectangle_tests();
  quadtree_tests();
  
  console.log('\n\n');
}

run();
module.exports = run;