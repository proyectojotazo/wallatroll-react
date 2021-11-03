import { useEffect, useState } from 'react'
import advertsServices from '../../api/advertsServices'

const useSelect = () => {
  const [tagSelected, setTagSelected] = useState('')
  const [tagsOp, setTagsOp] = useState([])

  useEffect(async () => {
    const apiTags = await advertsServices.getTags()
    setTagsOp(apiTags)
    setTagSelected(apiTags[0])
  }, [])

  const handleTags = e => {
    setTagSelected(e.target.value)
  }

  return {
    tagSelected,
    tagsOp,
    handleTags
  }
}

export default useSelect
