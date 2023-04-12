import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { SimpleButton } from './SimpleButton'

test('ボタンをクリックするとON/OFFの表示が切り替わる', () => {
  render(<SimpleButton />)
  const simpleButton = screen.getByRole('button')
  expect(simpleButton).toHaveTextContent('OFF')

  // ボタンをクリックして、テキストが変更されることを確認する
  userEvent.click(simpleButton)
  expect(simpleButton).toHaveTextContent('ON')
})
