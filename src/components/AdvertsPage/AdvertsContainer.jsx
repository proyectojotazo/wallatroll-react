import React, { useEffect, useState } from 'react'
import { getAdverts } from '../services'
import AdvertsCard from './AdvertsCard'

import './AdvertsContainer.css'

const AdvertsContainer = () => {
  const [adverts, setAdverts] = useState([])

  useEffect(async () => {
    const adverts = await getAdverts()
    setAdverts(adverts)
  }, [])

  return (
    <section className='advertsContainer'>
      {adverts.map(advert => (
        <AdvertsCard key={advert.id} advert={advert} />
      ))}
    </section>
  )
}

export default AdvertsContainer
