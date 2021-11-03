import { useState } from 'react'

const useCheckbox = ({ type }) => {
  const [value, setValue] = useState(false)

  const onChange = e => {
    setValue(prevState => !prevState)
  }

  const checked = value

  const name = 'rememberme'

  return {
    type,
    name,
    checked,
    value,
    onChange
  }
}

export default useCheckbox
