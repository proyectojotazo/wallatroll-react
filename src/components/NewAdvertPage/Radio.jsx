import React from 'react'

import './Radio.css'

const Radio = ({ htmlFor, labelText, ...props }) => {
  // TODO: PropTypes
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
