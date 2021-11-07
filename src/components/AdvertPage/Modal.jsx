import React from 'react'
import { useHistory } from 'react-router-dom'

import { advertsServices } from '../../api'

import './Modal.css'

const Modal = ({ modal, hideModal, id }) => {
  const history = useHistory()

  const deleteAdvert = async () => {
    console.log('borro el anuncio')
    try {
      await advertsServices.delete(id)
      history.push('/adverts')
    } catch (error) {
      console.error(error)
    }
    hideModal()
  }

  const cancelDelete = () => {
    hideModal()
  }

  return (
    <div className={`modal-container ${modal && 'show-modal'}`}>
      <div className='modal-pop-up'>
        <h2 className='modal-pop-up-title'>Está seguro?</h2>
        <p className='modal-pop-up-info'>
          Está seguro que desea borrar el anuncio?
        </p>
        <div className='modal-pop-up-btn-wrapper'>
          <button onClick={deleteAdvert} className='btn-confirm'>
            Si
          </button>
          <button onClick={cancelDelete} className='btn-denied'>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
