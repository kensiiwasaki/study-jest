import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('input form onchange event', () => {
  it('input test', () => {
    render(<SearchForm />)
    const inputValue = screen.getByRole('textbox') as HTMLInputElement
    userEvent.type(inputValue, 'test')

    expect(inputValue.value).toBe('test')
  })
})
