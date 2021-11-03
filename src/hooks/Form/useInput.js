import { useState } from 'react'

const useInput = ({ type, name, setError = () => {} }) => {
  /**
   * Hook props:
   * - type: string
   * - setError: func
   * ---
   * setError is used for hide error message when input changes
   */
  const [value, setValue] = useState('')

  const onChange = e => {
    setError(false)
    setValue(e.target.value)
  }

  return { type, name, value, onChange }
}

export default useInput
