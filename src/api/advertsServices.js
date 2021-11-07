import requestServices from './requestServices'

export default {
  baseURL: '/api/v1/adverts/',

  getOne: async function (id) {
    return await requestServices.get(`${this.baseURL}${id}`)
  },

  getAll: async function () {
    return await requestServices.get(`${this.baseURL}`)
  },
  getTags: async function () {
    return await requestServices.get(`${this.baseURL}tags`)
  },
  create: async function (data) {
    return await requestServices.post(`${this.baseURL}`, data)
  },
  delete: async function (id) {
    return await requestServices.delete(`${this.baseURL}${id}`)
  }
}
