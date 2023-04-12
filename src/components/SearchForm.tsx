import { ChangeEvent, FC, useState } from 'react'

export const SearchForm: FC = () => {
  const [value, setValue] = useState<string>('')
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onclick = () => {
    setValue('')
  }

  return (
    <>
      <input type="text" onChange={onchange} value={value} />
      <button onClick={onclick}>検索</button>
    </>
  )
}
