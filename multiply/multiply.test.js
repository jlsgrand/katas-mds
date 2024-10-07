const multiply = require('./multiply');

test('1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});