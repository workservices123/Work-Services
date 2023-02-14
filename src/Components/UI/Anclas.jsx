import React from 'react'

export const Anclas = ({estilos,enlace,textoAncla}) => {
  return (
    <a className={estilos} href={enlace} >{textoAncla}</a>
  )
}
