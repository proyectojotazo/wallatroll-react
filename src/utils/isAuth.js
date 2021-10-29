import storage from './storage'

const isAuth = () => {
  return !!storage.get('token')
}

export default isAuth
