/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom'

import advertsServices from '../../api/advertsServices'
import validateAdvert from '../../utils/newAdvertValidators'

const useNewAdvertForm = (tags, setMsgError) => {
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append('tags', tags)

    const { validAdvert, errMsgsFiltered } = validateAdvert(data)

    if (validAdvert) {
      // No existen errores
      try {
        const advertCreated = await advertsServices.create(data)
        const { id: advId } = advertCreated
        history.push(`/advert/${advId}`)
      } catch (e) {
        console.error(e)
        history.push('/adverts')
      }
    } else {
      // Hay errores
      setMsgError(errMsgsFiltered)
    }
  }

  return handleSubmit
}

export default useNewAdvertForm
