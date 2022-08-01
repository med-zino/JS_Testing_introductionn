const sum = require('./sum')

test('adding two numbers', () => {
  expect(sum(1, 3)).toBe(4)
})
