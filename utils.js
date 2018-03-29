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
};

function spyOn(fn1) {
  let called = 0;
  var fn2 = (...args) => {
    called ++;
    return fn1(...args);
  };
  fn2.callCount = () => called;
  return fn2;
};

module.exports = {
  assert,
  spyOn
}