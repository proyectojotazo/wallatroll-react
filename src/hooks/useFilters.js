import { useState } from 'react'

const useFilters = () => {
  const [filters, setFilters] = useState({})

  const handleFilters = filters => {
    setFilters(prevFilters => ({ ...prevFilters, ...filters }))
  }

  return { filters, handleFilters }
}

export default useFilters
