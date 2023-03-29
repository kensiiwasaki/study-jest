const hello = require('./hello')

test('Hello Name', () => {
  expect(hello('Name')).toBe('Hello Name')
})
