import client, {
  setAuthorizationHeader,
  removeAuthorizationHeader
} from '../api/client'

import storage from '../utils/storage'

export const login = async userData => {
  /**
   * saveLocal indicates if we save token in localStorage(true) or in
   * sessionStorage(null)
   */
  const saveLocal = userData.checked
  const { accessToken } = await client.post('/api/auth/login', userData)
  setAuthorizationHeader(accessToken)
  storage.set('token', accessToken, saveLocal)
}

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('token')
  })
