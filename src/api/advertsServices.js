import requestServices from './requestServices'

export default {
  getAll: async function () {
    return await requestServices.get('/api/v1/adverts')
  }
}
