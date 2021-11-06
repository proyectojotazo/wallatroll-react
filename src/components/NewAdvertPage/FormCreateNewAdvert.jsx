import React, { useState } from 'react'

import { useInput } from '../../hooks'
import useNewAdvertForm from '../../hooks/Form/useNewAdvertForm'

import SelectField from './SelectField'
import Radio from './Radio'
import { Button, Input } from '../common'

import './FormCreateNewAdvert.css'

const FormCreateNewAdvert = () => {
  // TODO: Mirar errores
  const [, setError] = useState(false)

  const name = useInput({ type: 'text', name: 'name', setError })
  const price = useInput({ type: 'number', name: 'price', setError })
  const file = useInput({ type: 'file', name: 'photo', setError })

  const [radioSelected, setRadioSelected] = useState('true')

  const handleRadio = e => {
    setRadioSelected(e.target.value)
  }
  const [tags, setTags] = useState([])

  const handleSubmit = useNewAdvertForm(tags)

  const btnDisabled =
    name.value === '' || tags.length === 0 || price.value === ''

  return (
    <form className='form-container' noValidate onSubmit={handleSubmit}>
      <h1 className='form-title'>New Advert</h1>
      <Input
        labelText='Nombre Artículo *'
        htmlFor='name'
        placeholder='Introduce articulo...'
        {...name}
      />
      <div className='form-radio-wrapper'>
        <Radio
          htmlFor='sale'
          labelText='Venta'
          type='radio'
          name='sale'
          id='sale'
          value='true'
          onChange={handleRadio}
          checked={radioSelected === 'true'}
        />
        <Radio
          htmlFor='buy'
          labelText='Compra'
          type='radio'
          name='sale'
          id='buy'
          value='false'
          onChange={handleRadio}
          checked={radioSelected === 'false'}
        />
      </div>
      <div className='form-tags-wrapper'>
        <SelectField tags={tags} setTags={setTags} />
      </div>
      <Input
        labelText='Precio *'
        htmlFor='price'
        placeholder='Introduce precio...'
        {...price}
      />
      <Input labelText='Selecciona Fotogragia' htmlFor='photo' {...file} />
      <Button variant='primary' margin='mx-1' disabled={btnDisabled}>
        Enviar
      </Button>
    </form>
  )
}

export default FormCreateNewAdvert
