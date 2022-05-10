import React from 'react'
import '../styles/numbers.css'

import ArrayComponents from '../components/numbers/ArrayComponent'

const Me = () => {
  return (
    <div className='numbers'>
      <h1 className='rub'>Nummer</h1>
      <div className='num-container'>
         <ArrayComponents />
      </div>
    </div>
    
  )
}

export default Me