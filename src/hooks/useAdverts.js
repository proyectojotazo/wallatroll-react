import { useEffect, useState } from 'react'
import advertsServices from '../api/advertsServices'

const useAdverts = () => {
  const [adverts, setAdverts] = useState([])

  useEffect(async () => {
    const adverts = await advertsServices.getAll()
    setAdverts(adverts)
  }, [])
  return adverts
}

export default useAdverts
