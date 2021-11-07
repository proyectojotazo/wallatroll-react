import React, { useState } from 'react'
import Slider from 'rc-slider'

import Radio from '../NewAdvertPage/Radio'
import 'rc-slider/assets/index.css'
import './FiltersForm.css'
import Checkbox from '../LoginPage/Checkbox'
import { useCheckbox, useInput } from '../../hooks'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const MyRange = createSliderWithTooltip(Slider.Range)

const FiltersForm = ({ handleFilters, maxPrice }) => {
  // TODO:Refactor?
  // TODO: PropTypes

  const name = useInput({ type: 'text', name: 'name' })
  const [radioSelected, setRadioSelected] = useState('all')
  const [sliderVal, setSliderVal] = useState([0, maxPrice])
  const checkLife = useCheckbox({ type: 'checkbox', name: 'lifestyle' })
  const checkMotor = useCheckbox({ type: 'checkbox', name: 'motor' })
  const checkMobile = useCheckbox({ type: 'checkbox', name: 'mobile' })
  const checkWork = useCheckbox({ type: 'checkbox', name: 'checkwork' })

  const handleChange = val => {
    setSliderVal(val)
  }

  const handleRadioChange = e => {
    setRadioSelected(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const filters = {
      name: name.value,
      saleBuy: radioSelected,
      price: sliderVal,
      tags: {
        lifestyle: checkLife.value,
        motor: checkMotor.value,
        mobile: checkMobile.value,
        work: checkWork.value
      }
    }

    handleFilters(filters)
  }

  return (
    <form noValidate className='filter-form' onSubmit={handleSubmit}>
      <input placeholder='Nombre del anuncio' {...name} />
      <div className='filter-radio-wrapper'>
        <Radio
          htmlFor='sale'
          labelText='Venta'
          type='radio'
          name='saleType'
          id='sale'
          value='sell'
          onChange={handleRadioChange}
          checked={radioSelected === 'sell'}
        />
        <Radio
          htmlFor='buy'
          labelText='Compra'
          type='radio'
          name='saleType'
          id='buy'
          value='buy'
          onChange={handleRadioChange}
          checked={radioSelected === 'buy'}
        />
        <Radio
          htmlFor='all'
          labelText='Todos'
          type='radio'
          name='saleType'
          id='all'
          value='all'
          onChange={handleRadioChange}
          checked={radioSelected === 'all'}
        />
      </div>
      <MyRange
        name='price'
        max={maxPrice}
        className='range-custom-width'
        value={sliderVal}
        onChange={handleChange}
      />
      <div className='filter-tags-wrapper'>
        <Checkbox
          labelText='lifestyle'
          htmlFor='lifestyle'
          id='lifestyle'
          {...checkLife}
        />
        <Checkbox
          labelText='motor'
          htmlFor='motor'
          id='motor'
          {...checkMotor}
        />
        <Checkbox
          labelText='mobile'
          htmlFor='mobile'
          id='mobile'
          {...checkMobile}
        />
        <Checkbox labelText='work' htmlFor='work' id='work' {...checkWork} />
        <button className='filter-btn'>Buscar</button>
      </div>
    </form>
  )
}

export default FiltersForm
