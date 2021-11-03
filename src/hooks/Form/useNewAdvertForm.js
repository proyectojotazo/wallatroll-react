import advertsServices from '../../api/advertsServices'

const useNewAdvertForm = tags => {
  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append('tags', tags)

    try {
      await advertsServices.create(data)
      console.log('Anuncio creado!')
    } catch (e) {
      console.log(e)
    }
  }

  return handleSubmit
}

export default useNewAdvertForm
