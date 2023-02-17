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
            <Anclas estilos="Ancla" textoAncla="Home" enlace="/" />
            <Anclas estilos="Ancla" textoAncla="Historial"  enlace="/historial" />
            <Anclas estilos="Ancla" textoAncla="Notificaciones"  enlace="/notificaciones" />
            <Anclas estilos="Ancla" textoAncla="Favoritos"  enlace="/favoritos" />
            <Anclas estilos="Ancla" textoAncla="Registro"  enlace="/registro" />
        </div>

    </div>
)
}
