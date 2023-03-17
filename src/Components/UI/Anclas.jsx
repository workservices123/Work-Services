import React from 'react'
import { Link } from 'react-router-dom'

export const Anclas = ({estilos,textoAncla,root}) => {
  return (
    <Link to={root} className={estilos} >{textoAncla}</Link>
  )
}
