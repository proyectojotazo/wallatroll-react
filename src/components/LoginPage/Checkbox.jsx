import React from 'react'
import './Checkbox.css'

const Checkbox = ({ htmlFor, labelText, ...props }) => {
  return (
    <div className='checkbox-wrapper'>
      <input {...props} className='input-checkbox' />
      <label className='label-checkbox' htmlFor={htmlFor}>
        {labelText}
      </label>
    </div>
  )
}

export default Checkbox
