import React from 'react'

import './Button.css'

const Button = ({ children, variant = '', margin = '', ...props }) => {
  return (
    <button className={`btn ${variant} ${margin}`} {...props}>
      {children}
    </button>
  )
}

export default Button
