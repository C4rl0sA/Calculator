import React, { useState } from 'react'
import { Logic } from './components/Logic';
import { Pantalla } from './components/Pantalla';

const Calculator = () => {

const [Val, setVal] = useState('')

const handleAdd = (e)=>{

  setVal(Val.concat(e.target.name));
}
const clear = (e) =>{
  setVal('')

}
const concealer = (e)=>{

  setVal(Val.slice(0,  - 1))
}
const result = () =>{
  try {

    setVal(eval(Val).toString());
    
  } catch (error) {
    setVal('No hay resultados ☹!')

    setTimeout(() => {

      setVal('')

    }, 2000);
  }
}

  return (
    <div className="calculator">

          <div className='pantalla'>
          <Pantalla
          Val={Val}
          
          />
          </div>

            <div className='logic'>

            <Logic
            handleAdd={handleAdd}
            result={result}
            clear={clear}
            concealer={concealer}
            />

            </div>
    </div>

  )
}

export default Calculator
