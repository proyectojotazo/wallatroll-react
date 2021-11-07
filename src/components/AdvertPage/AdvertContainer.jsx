import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import advertsServices from '../../api/advertsServices'

import useAdvert from '../../hooks/useAdvert'

import './AdvertContainer.css'

const IMG_URL_BASE = process.env.REACT_APP_API_BASE_URL

const AdvertContainer = () => {
  const { id } = useParams()
  const advert = useAdvert(id)
  const history = useHistory()

  const handleDelete = async () => {
    try {
      await advertsServices.delete(id)
      history.push('/adverts')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <article className='advert-card'>
      <h2 className='advert-card-name'>{advert.name}</h2>
      <img src={`${IMG_URL_BASE}${advert.photo}`} className='advert-card-img' />
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
  )
}

export default AdvertContainer
