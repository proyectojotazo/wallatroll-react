import client from './client'

export default {
  get: async function (path) {
    return await client.get(path)
  },

  post: async function (path, data) {
    return await client.post(path, data)
  }
}
