import React from 'react'

import { useLoginForm, useInput, useCheckbox, useMsgError } from '../../hooks/'

import { Button, Input, Msg } from '../common'
import Checkbox from './Checkbox'

import './FormLogin.css'

const FormLogin = () => {
  // TODO: Refactor?
  const { error, setMsgError, resetMsgError } = useMsgError()

  const email = useInput({ type: 'email', name: 'email', resetMsgError })
  const password = useInput({
    type: 'password',
    name: 'password',
    resetMsgError
  })

  const checkbox = useCheckbox({ type: 'checkbox', name: 'rememberme' })

  const btnDisabled = email.value === '' || password.value === ''

  const handleSubmit = useLoginForm(setMsgError)

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
      <Msg error={error} />
      <Button variant='primary' disabled={btnDisabled}>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default FormLogin
