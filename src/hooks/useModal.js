import { useState } from 'react'

const useModal = () => {
  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(true)
  }

  const hideModal = () => {
    setModal(false)
  }

  return { modal, showModal, hideModal }
}

export default useModal
