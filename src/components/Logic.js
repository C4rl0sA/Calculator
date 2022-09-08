import React from 'react'

export const Logic = ({Val, handleAdd, result, clear, concealer}) => {
  return (
    <>  
            <button name="1" onClick={handleAdd}>1</button>
            <button name="2" onClick={handleAdd}>2</button>
            <button name="3" onClick={handleAdd}>3</button>
            <button className='signs' name="+" onClick={handleAdd}>+</button>
            <button name="4" onClick={handleAdd}>4</button>
            <button name="5" onClick={handleAdd}>5</button>
            <button name="6" onClick={handleAdd}>6</button>
            <button className='signs' name="-" onClick={handleAdd}>-</button>
            <button name="7" onClick={handleAdd}>7</button>
            <button name="8" onClick={handleAdd}>8</button>
            <button name="9" onClick={handleAdd}>9</button>
            <button className='signs' name="*" onClick={handleAdd}>*</button>
            <button className='signs' name="%" onClick={handleAdd}>%</button>
            <button name="0" onClick={handleAdd}>0</button>
            <button className='signs' name="/" onClick={handleAdd}>÷</button>
            <button className='signs' onClick={concealer}>C</button>
            <button className='result' name="=" onClick={result}>=</button>
            <button className='clear' onClick={clear}>CLEAR</button>
    </>
  )
}
