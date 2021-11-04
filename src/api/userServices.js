import requestServices from './requestServices'
import { removeAuthorizationHeader, setAuthorizationHeader } from './client'

import storage from '../utils/storage'

export default {
  getUserData: function (data) {
    return {
      email: data.get('email'),
      password: data.get('password'),
      rememberme: data.get('rememberme')
    }
  },

  login: async function (data) {
    /**
     * saveLocal indicates if we save token in localStorage(true) or in
     * sessionStorage(null)
     */
    const userData = this.getUserData(data)

    const { accessToken } = await requestServices.post(
      '/api/auth/login',
      userData
    )

    const saveLocal = userData.rememberme
    setAuthorizationHeader(accessToken)
    storage.set('token', accessToken, saveLocal)
  },

  logout: async function () {
    await Promise.resolve()
    removeAuthorizationHeader()
    storage.remove('token')
  }
}
