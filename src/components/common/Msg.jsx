/* eslint-disable no-unused-vars */
import React from 'react'

const Msg = ({ msg }) => {
  const { success, error, message } = msg

  return <span className={`form-error ${error && 'visible'}`}>{message}</span>
}

export default Msg
