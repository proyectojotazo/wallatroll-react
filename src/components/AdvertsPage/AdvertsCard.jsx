import React from 'react'
import PropTypes from 'prop-types'

import './AdvertsCard.css'

const AdvertsCard = ({ advert }) => {
  const URI = 'http://localhost:3001'
  return (
    <div className='card'>
      {advert.photo && (
        <img className='card-img' src={`${URI}${advert.photo}`} alt='' />
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
    </div>
  )
}

AdvertsCard.propTypes = {
  advert: PropTypes.object.isRequired
}

export default AdvertsCard
