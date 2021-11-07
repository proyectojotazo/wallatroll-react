import React, { useState } from 'react'

import { useLoginForm, useInput, useCheckbox } from '../../hooks/'

import Checkbox from './Checkbox'
import { Button, Input, Msg } from '../common'

import './FormLogin.css'

const FormLogin = () => {
  // TODO: Refactor?
  const [msg, setMsg] = useState({ success: false, error: false, message: '' })

  const email = useInput({ type: 'email', name: 'email', setMsg })
  const password = useInput({ type: 'password', name: 'password', setMsg })
  const checkbox = useCheckbox({ type: 'checkbox', name: 'rememberme' })

  const btnDisabled = email.value === '' || password.value === ''

  const handleSubmit = useLoginForm(setMsg)

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
      <Msg msg={msg} />
      <Button variant='primary' margin='mx-1' disabled={btnDisabled}>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default FormLogin
