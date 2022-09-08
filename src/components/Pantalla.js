import React from 'react'


export const Pantalla = ({ Val }) => {

  const handleInputChange = (e) => {
      e.defaultPrevent();
  }

  



  return (
    <>
        <h1>CALCULATOR</h1>
            <p>N y C</p>
            
            <form>
            <input 
            type="text"
            value={ Val }
            onChange={ handleInputChange }
            
            />
            </form>
    </>
  )
}
