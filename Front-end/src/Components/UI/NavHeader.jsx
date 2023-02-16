import React from 'react'
import { Anclas } from './Anclas'

export const NavHeader = () => {
  return (
    <div id='NavHeader'>

        <div id="containerIcons">

            {/* Historial de trabajos */}
        <button id='buttonNav'>
            <span class="material-symbols-outlined" id='iconHeader'>
            work_history
            </span>
        </button>
        
        {/* Notificaciones */}
        <button id='buttonNav'>
            <span class="material-symbols-outlined" id='iconHeader'>
            notifications
            </span>
        </button>

        {/* Favoritos */}
        <button id='buttonNav'>
        <span class="material-symbols-outlined" id='iconHeader'>
            favorite
            </span>
        </button>

        {/* Usuario */}
        <button id='buttonNav'>
            <span class="material-symbols-outlined" id='iconHeader'>
            account_circle
            </span>
        </button>

        </div>

        <div id='TextIcons'>

            <Anclas
                estilos="Ancla" 
                enlace="https://www.google.com/" zz
                textoAncla="Historial"
            />

            <Anclas
                estilos="Ancla" 
                enlace="https://www.google.com/" zz
                textoAncla="Notificaciones"
            />

            <Anclas
                estilos="Ancla" 
                enlace="https://www.google.com/" zz
                textoAncla="Favoritos"
            />

            <Anclas
                estilos="Ancla" 
                enlace="https://www.google.com/" zz
                textoAncla="Registro"
            />

        </div>

    </div>
  )
}
