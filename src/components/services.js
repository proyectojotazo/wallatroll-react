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

export const getAdverts = async () => {
  /**
   * TODO: Hay que setear el authorization cada vez que se hace la petición.
   * Mirar de hacerlo mejor
   */

  const accessToken = storage.get('token')
  setAuthorizationHeader(accessToken)
  const data = await client.get('/api/v1/adverts')
  return data
}
