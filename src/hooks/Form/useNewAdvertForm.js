import { useHistory } from 'react-router-dom'

import advertsServices from '../../api/advertsServices'

const useNewAdvertForm = tags => {
  // TODO: mirar console.log()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append('tags', tags)

    try {
      const advertCreated = await advertsServices.create(data)
      const { id: advId } = advertCreated
      console.log('Anuncio creado!')
      history.push(`/advert/${advId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return handleSubmit
}

export default useNewAdvertForm
