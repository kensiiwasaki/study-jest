function sum(a, b) {
  return a + b
}

// const result = sum(1, 2)
// const expected = 4

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`)
// }

expect(sum(1, 2)).toBe(4)

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
  }
}
