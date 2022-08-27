import React from 'react'
import { useState } from 'react'

const Form = ({onInput}) => {

    const [num, setInput] = useState('');
    const [convertFrom, setConvertFrom] = useState('USD');
    const [convertTo, setConvertTo] = useState('USD');

    const onSubmit = (e) => {

        e.preventDefault();

        if(!num) {

            alert('Enter a number to convert');
            return;

        }

        onInput({num, convertFrom, convertTo})
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
                        <option value="JPY">JPY</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                        <option value="AUD">AUD</option>
                        <option value="HKD">HKD</option>
                    
                    </select>
            
                </div>
                <div className='container__dropdown'>
            
                    <select onChange={(e) => setConvertTo(e.target.value)}>

                        <option value="USD">USD</option>
                        <option value="JPY">JPY</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="GBP">GBP</option>
                        <option value="CNY">CNY</option>
                        <option value="AUD">AUD</option>
                        <option value="HKD">HKD</option>
                    
                    </select>
            
                </div>

            </div>
            
            <input className='btn' type="submit" value="Convert" />
        
        </div>
    
    </form>
  )
}

export default Form