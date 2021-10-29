import React from 'react'
import AdvertsCard from './AdvertsCard'

import './AdvertsContainer.css'

const adverts = [
  {
    id: '55c6de85-fbde-4015-bffe-1e37320eeae9',
    name: 'Ipad',
    sale: true,
    price: 899,
    tags: ['Word', 'Lifestyle', 'Mobile', 'Fork'],
    photo: null
  },
  {
    id: '55c6de85-fbde-4015-bffe-1e37320bfae9',
    name: 'XBOX One',
    sale: false,
    price: 499,
    tags: ['Lifestyle', 'Mobile'],
    photo: null
  },
  {
    id: '55c6de85-fbde-4015-bffe-1e37320eeaa9',
    name: 'Complementos',
    sale: true,
    price: 19.99,
    tags: ['Lifestyle', 'Mobile', 'Clothes', 'Gar', 'More'],
    photo: null
  },
  {
    id: '32c6de85-fbde-4015-bffe-1e37320bfae9',
    name: 'Guitarra Eléctrica',
    sale: false,
    price: 122.33,
    tags: ['Lifestyle', 'Mobile'],
    photo: null
  },
  {
    id: '55e2fe85-fbde-4015-bffe-1e37320bfae9',
    name: 'Armario grande',
    sale: true,
    price: 240,
    tags: ['Lifestyle', 'Mobile'],
    photo: ''
  },
  {
    id: '55c6de12-fbde-4015-bffe-1e37320bfae9',
    name: 'Libro Clean Code',
    sale: false,
    price: 12.99,
    tags: ['Lifestyle', 'Mobile'],
    photo: ''
  }
]
const AdvertsContainer = () => {
  return (
    <section className='advertsContainer'>
      {adverts.map(advert => (
        <AdvertsCard key={advert.id} advert={advert} />
      ))}
    </section>
  )
}

export default AdvertsContainer
