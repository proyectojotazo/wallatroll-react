import { useHistory, useLocation } from 'react-router-dom'
import { login } from '../components/services'

const useForm = (onLogin, setError) => {
  /**
   * onLogin comes from AuthContext
   * onLogin changes isLogged to true when we login successfully.
   *
   * setError is used to show an error when we recieve an invalid
   * username/password
   *
   */
  const history = useHistory()
  const location = useLocation()

  // const next =
  //   location.state?.next === undefined ? '/adverts' : location.state?.next

  const next = location.state?.next

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)

    const userLogin = {
      email: data.get('email'),
      password: data.get('password'),
      checked: data.get('rememberme')
    }

    try {
      await login(userLogin)
      onLogin()
      history.push(next || '/adverts')
    } catch (error) {
      setError(true)
    }
  }

  return handleSubmit
}

export default useForm
