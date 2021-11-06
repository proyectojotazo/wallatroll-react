import React from 'react'
import { Link } from 'react-router-dom'

import AdvertsCard from './AdvertsCard'
import FiltersForm from './FiltersForm'

import { useAdverts, useFilters } from '../../hooks'
import applyFilters from '../../utils/filters'

import './AdvertsContainer.css'

const AdvertsContainer = () => {
  const adverts = useAdverts()
  const { filters, handleFilters } = useFilters()

  const getMaxPrice = (arr = []) => {
    // Hacemos copia para que no desordene el array original
    if (arr.length === 0) return 1000
    const copy = [...arr]
    return copy.sort((a, b) => b.price - a.price).shift().price
  }

  const hasFilters = !!Object.entries(filters).length

  const filteredAdverts = hasFilters
    ? adverts.filter(advert => applyFilters(advert, filters))
    : []

  const maxPrice = getMaxPrice(adverts)

  return (
    <>
      {adverts.length !== 0 && (
        <FiltersForm handleFilters={handleFilters} maxPrice={maxPrice} />
      )}
      <section className='advertsContainer'>
        {filteredAdverts.length !== 0 ? (
          filteredAdverts.map(advert => (
            <AdvertsCard key={advert.id} advert={advert} />
          ))
        ) : hasFilters && filteredAdverts.length === 0 ? (
          <h2 className='adverts-nocontent-text'>
            No existen anuncios con esos filtros
          </h2>
        ) : adverts.length !== 0 ? (
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
