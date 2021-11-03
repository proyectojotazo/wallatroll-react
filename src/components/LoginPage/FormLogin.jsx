import React, { useState } from 'react'

import { useLoginForm, useInput, useCheckbox } from '../../hooks/'

import Checkbox from './Checkbox'
import { Button, Input } from '../common'

import './FormLogin.css'

const FormLogin = () => {
  const [error, setError] = useState(false)

  const email = useInput({ type: 'email', name: 'email', setError })
  const password = useInput({ type: 'password', name: 'password', setError })
  const checkbox = useCheckbox({ type: 'checkbox' })

  const btnDisabled = email.value === '' || password.value === ''

  const handleSubmit = useLoginForm(setError)

  return (
    <form className='form-container' noValidate onSubmit={handleSubmit}>
      <h1 className='form-title'>Login</h1>
      <Input
        labelText='Usuario'
        htmlFor='email'
        placeholder='Introduce email...'
        {...email}
      />
      <Input
        labelText='Contraseña'
        htmlFor='password'
        placeholder='Introduce contraseña...'
        {...password}
      />
      <Checkbox
        labelText='Mantenerme logeado'
        htmlFor='rememberme'
        id='rememberme'
        {...checkbox}
      />
      <span className={`form-error ${error && 'visible'}`}>
        El usuario o la contraseña son incorrectos
      </span>
      <Button variant='primary' margin='mx-1' disabled={btnDisabled}>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default FormLogin
