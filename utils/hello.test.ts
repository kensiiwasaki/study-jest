import { hello } from './hello'

test('Hello Name', () => {
  expect(hello('Name')).toBe('Hello Name')
})
