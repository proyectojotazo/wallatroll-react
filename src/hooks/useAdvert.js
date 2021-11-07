import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { advertsServices } from '../api'

const useAdvert = id => {
  const history = useHistory()
  const [advert, setAdvert] = useState({})

  useEffect(async () => {
    try {
      const advertSelected = await advertsServices.getOne(id)
      setAdvert(advertSelected)
    } catch (error) {
      history.push('/404', { state: id })
    }
  }, [])

  return advert
}

export default useAdvert
