import React from 'react'
import { CartasTrabajos } from '../../UI/CartasTrabajos'

export const ContenidoCentral = () => {

  const Trabajos = [
    {
        "Imagen": "",
        "Titulo": "1",
        "Pago": ""
    },
  
    {
        "Imagen": "",
        "Titulo": "2",
        "Pago": ""
    },
  
    {
        "Imagen": "",
        "Titulo": "3",
        "Pago": ""
    },
  
    {
        "Imagen": "",
        "Titulo": "4",
        "Pago": ""
    },
  
    {
        "Imagen": "",
        "Titulo": "5",
        "Pago": ""
    }
  ]

  return (
    <section className='ContenidoCentral'>
      {
        Trabajos.map(Element=> <CartasTrabajos 

          Imagen={Element.Imagen}
          Titulo={Element.Titulo}
          Pago={Element.Pago}
          
          /> )
      }
    </section>
  )
}