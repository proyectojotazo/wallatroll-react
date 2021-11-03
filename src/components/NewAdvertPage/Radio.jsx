import React from 'react'

import './Radio.css'

const Radio = ({ htmlFor, labelText, ...props }) => {
  return (
    <>
      <label htmlFor={htmlFor} className='label-radio'>
        {labelText}
      </label>
      <input className='input-radio' {...props} />
    </>
  )
}

export default Radio
