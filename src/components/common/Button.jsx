import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ children, variant = '', margin = '', ...props }) => {
  return (
    <button
      className={`btn ${variant} ${props.disabled && 'disabled'} ${margin}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.string,
  margin: PropTypes.string
}

export default Button
