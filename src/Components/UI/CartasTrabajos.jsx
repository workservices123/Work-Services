import React from 'react'

export const CartasTrabajos = ({Imagen,Titulo,Pago}) => {
  return (
    <div className='CartaT'>
        <img src={Imagen} />
        <h1>{Titulo}</h1>
        <p>{Pago}</p>
    </div>
  )
}
