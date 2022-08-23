import React from 'react'
import { useState } from 'react'

const Form = ({onInput}) => {

    const [num, setInput] = useState('');
    const [convertFrom, setConvertFrom] = useState('USD');
    const [conertTo, setConvertTo] = useState('USD');

    const onSubmit = (e) => {

        e.preventDefault();

        if(!num) {

            alert('Enter a number to convert');
            return;

        }

        onInput({num, convertFrom, conertTo})
    }

  return (

    <form className='form' onSubmit={onSubmit}>
    
        <div className='container container__input'>
    
            <label>Amount</label>
            <input className='input' 
                   type="number" 
                   placeholder='Enter amount' 
                   value={num} 
                   onChange={(e) => setInput(e.target.valueAsNumber)} />
    
        </div>

        <div className="container__bottom">
        
            <div className="container__row">
            
                <div className='container__dropdown'>
        
                    <select onChange={(e) => setConvertFrom(e.target.value)}>
            
                        <option value="USD">USD</option>
                        <option value="Yen">Yen</option>
                        <option value="Euro">Euro</option>
                        <option value="Yuan">Yuan</option>
                    
                    </select>
            
                </div>
                <div className='container__dropdown'>
            
                    <select onChange={(e) => setConvertTo(e.target.value)}>

                        <option value="USD">USD</option>
                        <option value="Yen">Yen</option>
                        <option value="Euro">Euro</option>
                        <option value="Yuan">Yuan</option>
                    
                    </select>
            
                </div>

            </div>
            
            <input className='btn' type="submit" value="Convert" />
        
        </div>
    
    </form>
  )
}

export default Form