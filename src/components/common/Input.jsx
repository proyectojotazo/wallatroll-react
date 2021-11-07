import React from 'react'
import './Input.css'

const Input = ({ htmlFor, labelText, ...props }) => {
  // TODO: PropTypes
  const { type } = props
  return (
    <div className='input-wrapper'>
      <label htmlFor={htmlFor} className='label-input'>
        {labelText}
      </label>
      <input className={type !== 'file' ? 'input' : undefined} {...props} />
    </div>
  )
}

export default Input
