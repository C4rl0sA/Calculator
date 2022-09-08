import React from 'react'

export const Pantalla = ({Val}) => {
  return (
    <>
        <h1>CALCULATOR</h1>
            <p>N y C</p>
            
            <form><input type="text" defaultValue={Val}/></form>
    </>
  )
}
