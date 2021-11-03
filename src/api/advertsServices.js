import requestServices from './requestServices'

export default {
  getAll: async function () {
    return await requestServices.get('/api/v1/adverts')
  },
  getTags: async function () {
    return await requestServices.get('/api/v1/adverts/tags')
  },
  create: async function (data) {
    return await requestServices.post('/api/v1/adverts', data)
  }
}
