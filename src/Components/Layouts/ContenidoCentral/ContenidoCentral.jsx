import React from 'react'
import { CartasTrabajos } from '../../UI/CartasTrabajos'
import Trabajos from '../../../trabajos'

export const ContenidoCentral = () => {
  return (
    <section className='ContenidoCentral'>
      {
        Trabajos.map((Element) =>
          <CartasTrabajos key={Element.id}
            Imagen={Element.Imagen}
            Titulo={Element.Titulo}
            Pago={Element.Pago}
          />)
      }
    </section>
  )
}