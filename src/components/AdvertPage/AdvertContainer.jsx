/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

import { useModal, useAdvert } from '../../hooks'

import Modal from './Modal'

import './AdvertContainer.css'

const IMG_URL_BASE = process.env.REACT_APP_API_BASE_URL

const AdvertContainer = () => {
  const { modal, showModal, hideModal } = useModal()

  const { id } = useParams()
  const advert = useAdvert(id)

  const handleDelete = async () => {
    showModal()
  }

  const img = advert.photo
    ? `${IMG_URL_BASE}${advert.photo}`
    : 'https://via.placeholder.com/150x100?text=No+Foto'

  return (
    <>
      <Modal modal={modal} hideModal={hideModal} id={id} />
      <article className='advert-card'>
        <h2 className='advert-card-name'>{advert.name}</h2>
        <img src={img} className='advert-card-img' />
        <div className='items-wrapper'>
          <p className='info-wrapper-item'>Precio: {advert.price}€</p>
          <p className='info-wrapper-item'>
            {advert.sale ? 'En venta' : 'Buscando'}
          </p>
          <ul className='info-wrapper-list'>
            <h3 className='list-title'>Tags</h3>
            <div className='tags-wrapper'>
              {advert.tags?.map(tag => (
                <li key={advert.id} className='list-item'>
                  {tag}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <button onClick={handleDelete} className='advert-card-btn'>
          Borrar anuncio
        </button>
      </article>
    </>
  )
}

export default AdvertContainer
