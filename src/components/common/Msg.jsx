/* eslint-disable no-unused-vars */
import React from 'react'

const Msg = ({ error }) => {
  // TODO: PropTypes

  const { hasError, message } = error

  return (
    <>
      {message.map((msg, i) => (
        <span key={i} className={`form-error ${hasError && 'visible'}`}>
          {msg}
        </span>
      ))}
    </>
  )
}

export default Msg
