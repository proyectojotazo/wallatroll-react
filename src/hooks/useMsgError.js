import { useState } from 'react'

const useMsgError = () => {
  const [error, setError] = useState({ hasError: false, message: [] })

  const setMsgError = (msg = []) => {
    setError({
      hasError: true,
      message: msg
    })
  }

  const resetMsgError = () => {
    setError({ hasError: false, message: [] })
  }

  return { error, setMsgError, resetMsgError }
}

export default useMsgError
