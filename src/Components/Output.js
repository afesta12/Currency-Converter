import React from 'react'

const Output = ({text, to, from, amount}) => {
  return (
    <div className='output'>
    
        
        <h2>{amount}</h2> 
        <h3> {from} is equivalent to </h3>
        <h2>{text}</h2>
        <h3>{to}</h3>
    
    </div>
  )
}

export default Output