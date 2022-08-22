import React from 'react'

const Dropdown = ({title, name}) => {
  return (
    <div className='container dropdown'>
    
        <label htmlFor={name}>{title}:</label>
        <select name={name} id={name}>

            <option value="USD">USD</option>
            <option value="Yen">Yen</option>
            <option value="Euro">Euro</option>
            <option value="Yuan">Yuan</option>
        
        </select>
    
    </div>
  )
}

export default Dropdown