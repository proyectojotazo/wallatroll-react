import { useState } from 'react'

const useRadio = () => {
  const [checked, setChecked] = useState(true)

  const handleCheck = () => {
    setChecked(prevState => !prevState)
  }

  return { checked, handleCheck }
}

export default useRadio
