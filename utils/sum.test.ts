import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 3 + 4 to equal 7', () => {
  expect(sum(3, 4)).toBe(7)
})

test('adds 6 + 4 to equal 10', () => {
  expect(sum(6, 4)).toBe(10)
})

test('adds 200 + 200 to equal 400', () => {
  expect(sum(200, 200)).toBe(400)
})

test('adds 20 + -40 to equal -20', () => {
  expect(sum(20, -40)).toBe(-20)
})
