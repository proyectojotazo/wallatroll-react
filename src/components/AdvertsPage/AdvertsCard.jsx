import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './AdvertsCard.css'
const URI = process.env.REACT_APP_API_BASE_URL

const AdvertsCard = ({ advert }) => {
  return (
    <div className='card'>
      {advert.photo && (
        <img
          className='card-img'
          src={`${URI}${advert.photo}`}
          alt={advert.name}
        />
      )}
      <h2 className='card-title'>{advert.name}</h2>
      <div className='card-data-wrapper'>
        <p className='card-data-text'>Precio: {advert.price}€</p>
        <p className='card-data-text'>
          {advert.sale ? 'En venta' : 'Buscando'}
        </p>
        <h3 className='card-tags-title'>Tags:</h3>
        <ul className='card-tags-wrapper'>
          {advert.tags.map((tag, i) => (
            <li key={i} className='tag-item'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`advert/${advert.id}`} className='card-detail'>
        Detalle
      </Link>
    </div>
  )
}

AdvertsCard.propTypes = {
  advert: PropTypes.object.isRequired
}

export default AdvertsCard
