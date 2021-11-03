import { useHistory, useLocation } from 'react-router-dom'
import userServices from '../../api/userServices'
import useAuth from '../../contexts/useAuth'

const useForm = setError => {
  /**
   * setError is used to show an error when we recieve an invalid
   * username/password
   *
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
      setError(true)
    }
  }

  return handleSubmit
}

export default useForm