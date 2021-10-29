import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({ labelChild, labelFor, ...props }) => {
  if (props.type === 'checkbox') {
    return (
      <>
        <input {...props} className='form-input-checkbox' />
        <label className='form-label-checkbox' htmlFor={labelFor}>
          {labelChild}
        </label>
      </>
    )
  }

  return (
    <>
      <label className='form-label-input' htmlFor={labelFor}>
        {labelChild}
      </label>
      <input {...props} className='form-input' />
    </>
  )
}

FormField.propTypes = {
  labelChild: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired
}

export default FormField
