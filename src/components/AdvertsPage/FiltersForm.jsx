/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from 'rc-slider'
import Radio from '../NewAdvertPage/Radio'
import 'rc-slider/assets/index.css'
import './FiltersForm.css'
import Checkbox from '../LoginPage/Checkbox'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const MyRange = createSliderWithTooltip(Slider.Range)

const FiltersForm = () => {
  return (
    <form noValidate className='filter-form'>
      <input type='text' name='name' placeholder='Nombre del anuncio' />
      <div className='filter-radio-wrapper'>
        <Radio
          htmlFor='sale'
          labelText='Venta'
          type='radio'
          name='saleType'
          id='sale'
          value='1'
        />
        <Radio
          htmlFor='buy'
          labelText='Compra'
          type='radio'
          name='saleType'
          id='buy'
          value='2'
        />
        <Radio
          htmlFor='all'
          labelText='Todos'
          type='radio'
          name='saleType'
          id='all'
          value='3'
        />
      </div>
      <MyRange
        defaultValue={[0, 10]}
        max='900'
        step='10'
        className='range-custom-width'
      />
      <div className='filter-tags-wrapper'>
        <Checkbox
          labelText='lifestyle'
          htmlFor='lifestyle'
          id='lifestyle'
          type='checkbox'
        />
        <Checkbox
          labelText='motor'
          htmlFor='motor'
          id='motor'
          type='checkbox'
        />
        <Checkbox
          labelText='mobile'
          htmlFor='mobile'
          id='mobile'
          type='checkbox'
        />
        <Checkbox labelText='work' htmlFor='work' id='work' type='checkbox' />
      </div>
    </form>
  )
}

export default FiltersForm
