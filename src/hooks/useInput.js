import { useState } from 'react'

const useInput = ({ type, initialValue, setError }) => {
  /**
   * Hook props:
   * - type: string
   * - initialValue: empty string or bool(checkbox)
   * - setError: func
   * ---
   * setError is used for hide error message when input changes
   */
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    if (e.target.type === 'checkbox') {
      setValue(prevState => !prevState)
    } else {
      setError(false)
      setValue(e.target.value)
    }
  }

  const checked = value

  const name = type === 'checkbox' ? 'rememberme' : type

  return type === 'checkbox'
    ? { type, name, checked, value, onChange }
    : { type, name, value, onChange }
}

export default useInput
