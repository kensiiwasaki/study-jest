function sum(a, b) {
  return a + b
}

test('adds 1 + 2 to equal 3', function () {
  expect(sum(1, 2)).toBe(4)
})

test('adds 3 + 4 to equal 7', function () {
  expect(sum(3, 4)).toBe(8)
})

function test(title, callback) {
  try {
    callback()
  } catch (error) {
    console.error(error)
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
  }
}
