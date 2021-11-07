import { useHistory } from 'react-router-dom'

import advertsServices from '../../api/advertsServices'

const useNewAdvertForm = tags => {
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append('tags', tags)

    try {
      const advertCreated = await advertsServices.create(data)
      const { id: advId } = advertCreated
      history.push(`/advert/${advId}`)
    } catch (e) {
      console.error(e)
      history.push('/adverts')
    }
  }

  return handleSubmit
}

export default useNewAdvertForm
