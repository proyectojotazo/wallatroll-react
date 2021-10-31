import storage from '../utils/storage'
import client, { setAuthorizationHeader } from './client'

export default {
  needAuth: function (path) {
    return path.split('/').includes('adverts')
  },

  setRequestHeader: function (path) {
    if (this.needAuth(path)) {
      const token = storage.get('token')
      setAuthorizationHeader(token)
    }
  },

  get: async function (path) {
    this.setRequestHeader(path)
    return await client.get(path)
  },

  post: async function (path, data) {
    this.setRequestHeader(path)
    return await client.post(path, data)
  }
}
