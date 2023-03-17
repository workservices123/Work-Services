import React from 'react'
import { Logo } from './Logo'
import { Anclas } from '../UI/Anclas'

export const ContenedorLogo = () => {
  return (
    <Anclas
      estilos="ContenedorLogo"
      textoAncla={<Logo />}
      root="/"
    />
  )
}
