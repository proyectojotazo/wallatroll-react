import React from 'react'

import Button from '../common'

import './Form.css'

const Form = () => {
  return (
    <form className='form-container' noValidate>
      <label className='form-label-input' htmlFor='username'>
        Usuario
      </label>
      <input
        className='form-input'
        type='text'
        name='username'
        placeholder='Introduce usuario...'
      />
      <label className='form-label-input' htmlFor='password'>
        Contraseña
      </label>
      <input
        className='form-input'
        type='password'
        name='password'
        placeholder='Introduce contraseña...'
      />
      <div className='form-wrapper-checkbox'>
        <input
          className='form-input-checkbox'
          type='checkbox'
          name='rememberme'
          id='rememberme'
        />
        <label className='form-label-checkbox' htmlFor='rememberme'>
          Mantenerme logeado
        </label>
      </div>
      <Button variant='primary' margin='mx-2'>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default Form
