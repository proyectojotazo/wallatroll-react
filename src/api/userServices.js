import requestServices from './requestServices'
import { removeAuthorizationHeader, setAuthorizationHeader } from './client'

import storage from '../utils/storage'

export default {
  login: async function (userData) {
    /**
     * saveLocal indicates if we save token in localStorage(true) or in
     * sessionStorage(null)
     */

    const { accessToken } = await requestServices.post(
      '/api/auth/login',
      userData
    )

    const saveLocal = userData.checked
    setAuthorizationHeader(accessToken)
    storage.set('token', accessToken, saveLocal)
  },

  logout: async function () {
    await Promise.resolve()
    removeAuthorizationHeader()
    storage.remove('token')
  }
}
