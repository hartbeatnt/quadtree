var { assert, spyOn} = require('../utils');

module.exports = () => {
  console.log('\n````````````````````');
  console.log('``````UTILITY``````\n');
  assert(1,1,'assert function functional');
  assert(typeof spyOn, "function", "spyOn util exists");
  
  var fn = () => "spy on me";
  try {
    var spy = spyOn(fn);
    assert(typeof spy, "function", "spyOn returns a function");
    assert(spy(), "spy on me", "spy should return what spied on function would return");
    assert(spy.callCount(), 1, "callCount should increment when spied function is called")
  } catch(err) {
    console.log(err);
  }
}
