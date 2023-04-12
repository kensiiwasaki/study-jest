import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('input form onchange event', () => {
  it('input test', () => {
    render(<SearchForm />)
    const inputValue = screen.getByRole('textbox') as HTMLInputElement
    const searchBtn = screen.getByRole('button')
    // インプットの中にtestと打った時にtestと入力されているか
    userEvent.type(inputValue, 'test')
    expect(inputValue.value).toBe('test')

    // 検索ボタンを押した際にインプットの中身が空になるかテスト
    userEvent.click(searchBtn)
    expect(inputValue.value).toBe('')
  })
})
