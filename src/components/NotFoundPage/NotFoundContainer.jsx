import React from 'react'
import { useHistory } from 'react-router-dom'

import './NotFoundContainer.css'

const NotFoundContainer = () => {
  const history = useHistory()

  const wrongId = history.location.state?.state

  const notFoundMsg = wrongId
    ? `No existe el anuncio con id: ${wrongId}`
    : 'Ups... Pagina no encontrada...'

  console.log(history)
  return (
    <section className='not-found'>
      <h2 className='not-found-title'>{notFoundMsg}</h2>
    </section>
  )
}

export default NotFoundContainer
