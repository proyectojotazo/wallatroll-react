import { useState } from 'react'

const useCheckbox = ({ type, name }) => {
  const [value, setValue] = useState(false)

  const onChange = e => {
    setValue(prevState => !prevState)
  }

  const checked = value

  return {
    type,
    name,
    checked,
    value,
    onChange
  }
}

export default useCheckbox
