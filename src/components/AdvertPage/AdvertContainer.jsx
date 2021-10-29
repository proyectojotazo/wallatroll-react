import React from 'react'
import { useParams } from 'react-router-dom'

const AdvertContainer = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Advert Container: {id}</h1>
    </div>
  )
}

export default AdvertContainer
