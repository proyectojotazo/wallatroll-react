import React, { useState } from 'react'

import { Button } from '../common'
import FormField from './FormField'

import { useForm, useInput } from '../../hooks'

import './Form.css'

const Form = () => {
  const [error, setError] = useState(false)

  const email = useInput({ type: 'email', initialValue: '', setError })
  const password = useInput({ type: 'password', initialValue: '', setError })
  const checkbox = useInput({ type: 'checkbox', initialValue: false })

  const btnDisabled = email.value === '' || password.value === ''

  const handleSubmit = useForm(setError)

  return (
    <form className='form-container' noValidate onSubmit={handleSubmit}>
      <FormField
        labelChild='Usuario'
        labelFor='email'
        placeholder='Introduce email...'
        {...email}
      />
      <FormField
        labelChild='Contraseña'
        labelFor='password'
        placeholder='Introduce contraseña...'
        {...password}
      />
      <div className='form-wrapper-checkbox'>
        <FormField
          labelChild='Mantenerme logeado'
          labelFor='rememberme'
          id='rememberme'
          {...checkbox}
        />
      </div>
      <span className={`form-error ${error && 'visible'}`}>
        El usuario o la contraseña son incorrectos
      </span>
      <Button variant='primary' margin='mx-2' disabled={btnDisabled}>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default Form
