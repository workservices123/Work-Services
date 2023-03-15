import React from 'react'
import { ContenidoCentral } from '../ContenidoCentral/ContenidoCentral'
import { MenuLateral } from '../MenuLateral/MenuLateral'

export const Principal = () => {
  return (
    <section className='Principal'>
        <MenuLateral />
        <ContenidoCentral />
    </section>
  )
}
