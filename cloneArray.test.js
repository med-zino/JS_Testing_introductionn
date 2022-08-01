const cloneArray = require('./clone')

test('cloning an array', () => {
  arr = [1, 3, 5]
  expect(cloneArray(arr)).toEqual(arr)
})
