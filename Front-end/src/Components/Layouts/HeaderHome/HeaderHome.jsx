import React from 'react'
import { ContenedorBuscador } from '../../UI/ContenedorBuscador'
import { ContenedorLogo } from '../../UI/ContenedorLogo'
import { NavHeader } from '../../UI/NavHeader'

export const HeaderHome = () => {
  return (
    <section className='Header'>
      <div id='contenedorHeader'>

        <ContenedorLogo />
        <ContenedorBuscador />
        <NavHeader />
        
      </div>
    </section>
  )
}
