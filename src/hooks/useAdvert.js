import { useEffect, useState } from 'react'
import advertsServices from '../api/advertsServices'

const useAdvert = id => {
  const [advert, setAdvert] = useState({})

  useEffect(async () => {
    const advertSelected = await advertsServices.getOne(id)
    setAdvert(advertSelected)
  }, [])

  return advert
}

export default useAdvert
