import React from 'react'

const LargeInput = ({title}) => {
  return (
    <div className='container input__container'>
    
        <label>{title}</label>
        <input type="text" placeholder='Enter amount' />
    
    </div>
  )
}

export default LargeInput