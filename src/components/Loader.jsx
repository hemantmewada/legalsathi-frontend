import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import { primaryColor } from '../config/data'

const Loader = () => {
  return (
    // <RotatingSquare
    //     visible={true}
    //     height="50"
    //     width="50"
    //     color={primaryColor}
    //     ariaLabel="rotating-square-loading"
    // />
    <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
        <div class="bar7"></div>
        <div class="bar8"></div>
        <div class="bar9"></div>
        <div class="bar10"></div>
        <div class="bar11"></div>
        <div class="bar12"></div>
    </div>
  )
}

export default Loader