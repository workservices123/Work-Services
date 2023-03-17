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

                <Anclas
                    estilos="Ancla"
                    root="/historialTrabajos"
                    textoAncla="Historial"
                />
            </div>

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

        </div>

    </div>
  )
}
