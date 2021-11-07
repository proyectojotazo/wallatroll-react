import { useHistory, useLocation } from 'react-router-dom'

import { userServices } from '../../api'
import useAuth from '../../contexts/useAuth'

const useLoginForm = setMsgError => {
  /**
   * setError is used to show an error when we recieve an invalid
   * username/password
   */
  const { handleLogin } = useAuth()

  const history = useHistory()
  const location = useLocation()

  const next = location.state?.next

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)

    try {
      await userServices.login(data)
      handleLogin()
      history.push(next || '/adverts')
    } catch (error) {
      setMsgError(['El usuario y/o la contraseña son incorrectos'])
    }
  }

  return handleSubmit
}

export default useLoginForm
