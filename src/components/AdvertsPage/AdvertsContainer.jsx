import React from 'react'
import { useAdverts } from '../../hooks'
import AdvertsCard from './AdvertsCard'

import './AdvertsContainer.css'

const AdvertsContainer = () => {
  const adverts = useAdverts()

  return (
    <section className='advertsContainer'>
      {adverts.map(advert => (
        <AdvertsCard key={advert.id} advert={advert} />
      ))}
    </section>
  )
}

export default AdvertsContainer
