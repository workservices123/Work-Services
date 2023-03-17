import React from 'react'
import { Anclas } from './Anclas'

export const NavHeader = () => {
return (
    <div id='NavHeader'>

        <div id="containers">
            
            <div id='logos'>
                {/* Historial de trabajos */}
                <Anclas
                    estilos="Ancla" 
                    root="/historialTrabajos"
                    textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                        work_history
                    </span>}
                />

<<<<<<< HEAD:src/Components/UI/NavHeader.jsx
                <Anclas
                    estilos="Ancla"
                    root="/historialTrabajos"
                    textoAncla="Historial"
                />
            </div>
=======
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
>>>>>>> 2294246bd851d7d99b13b3b97e7eac3414a98cda:Front-end/src/Components/UI/NavHeader.jsx

            <div id='logos'>
                {/* Notificaciones */}
                <Anclas
                    estilos="Ancla"
                    root="/notificaciones"
                    textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                        notifications
                    </span>}
                />

                <Anclas
                    estilos="Ancla"
                    root="/notificaciones"
                    textoAncla="Notificaciones"
                />
            </div>

            <div id='logos'>
                {/* Favoritos */}
                <Anclas
                    estilos="Ancla"
                    root="/favoritos"
                    textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                        favorite
                    </span>}
                />

<<<<<<< HEAD:src/Components/UI/NavHeader.jsx
                <Anclas
                    estilos="Ancla"
                    root="/favoritos"
                    textoAncla="Favoritos"
                />
            </div>

            <div id='logos'>
                {/* Usuario */}
                <Anclas
                    estilos="Ancla"
                    root="/profile"
                    textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                        account_circle
                    </span>}
                />

                <Anclas
                    estilos="Ancla"
                    root="/profile"
                    textoAncla="Perfil"
                />
            </div>

=======
        <div id='TextIcons'>
            <Anclas estilos="Ancla" textoAncla="Home" enlace="/" />
            <Anclas estilos="Ancla" textoAncla="Historial"  enlace="/historial" />
            <Anclas estilos="Ancla" textoAncla="Notificaciones"  enlace="/notificaciones" />
            <Anclas estilos="Ancla" textoAncla="Favoritos"  enlace="/favoritos" />
            <Anclas estilos="Ancla" textoAncla="Registro"  enlace="/registro" />
>>>>>>> 2294246bd851d7d99b13b3b97e7eac3414a98cda:Front-end/src/Components/UI/NavHeader.jsx
        </div>

    </div>
)
}
