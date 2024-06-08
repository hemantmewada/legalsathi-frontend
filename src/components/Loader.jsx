import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import { primaryColor } from '../config/data'

const Loader = () => {
  return (
    <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color={primaryColor}
        ariaLabel="rotating-square-loading"
    />
  )
}

export default Loader