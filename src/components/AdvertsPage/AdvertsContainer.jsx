import React from 'react'
import { useAdverts } from '../../hooks'
import { Link } from 'react-router-dom'

import AdvertsCard from './AdvertsCard'
import FiltersForm from './FiltersForm'

import './AdvertsContainer.css'

const AdvertsContainer = () => {
  const adverts = useAdverts()

  return (
    <>
      {adverts.length !== 0 && <FiltersForm />}
      <section className='advertsContainer'>
        {adverts.length !== 0 ? (
          adverts.map(advert => <AdvertsCard key={advert.id} advert={advert} />)
        ) : (
          <>
            <h2 className='adverts-nocontent-text'>No hay anuncios</h2>
            <Link to='/adverts/new' className='adverts-link'>
              Crea uno
            </Link>
          </>
        )}
      </section>
    </>
  )
}

export default AdvertsContainer
