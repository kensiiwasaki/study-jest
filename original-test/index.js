// テストする関数
function sum(a, b) {
  return a + b
}

// テストケース
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
test('adds 3 + 4 to equal 7', () => {
  expect(sum(3, 4)).toBe(8)
})

// テスト処理の実装
async function test(title, callback) {
  try {
    await callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
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
