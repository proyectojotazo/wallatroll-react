import { useState } from 'react'

const useInput = ({ type, name, setMsg = () => {} }) => {
  /**
   * Hook props:
   * - type: string
   * - setError: func
   * ---
   * setError is used for hide error message when input changes
   */
  const [value, setValue] = useState('')

  const onChange = e => {
    setMsg({
      success: false,
      error: false,
      message: ''
    })
    setValue(e.target.value)
  }

  return { type, name, value, onChange }
}

export default useInput
