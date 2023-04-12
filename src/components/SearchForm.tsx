import { ChangeEvent, FC, useState } from 'react'

export const SearchForm: FC = () => {
  const [value, setValue] = useState<string>('')
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={onchange} value={value} />
    </>
  )
}
