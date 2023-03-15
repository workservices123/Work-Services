import React from 'react'
import { Profile } from '../Pages/Profile/Profile'
import { Anclas } from './Anclas'

export const NavHeader = () => {
  return (
    <div id='NavHeader'>

        <div id="containers">
            
            <div id='logos'>
                {/* Historial de trabajos */}
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla={<span class="material-symbols-outlined" id='iconHeader'>
                        work_history
                    </span>}
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla="Historial"
                />
            </div>

            <div id='logos'>
                {/* Notificaciones */}
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla={<span class="material-symbols-outlined" id='iconHeader'>
                        notifications
                    </span>}
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla="Notificaciones"
                />
            </div>

            <div id='logos'>
                {/* Favoritos */}
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla={<span class="material-symbols-outlined" id='iconHeader'>
                        favorite
                    </span>}
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla="Favoritos"
                />
            </div>

            <div id='logos'>
                {/* Usuario */}
                <Anclas
                    estilos="Ancla" 
                    enlace="Profile"
                    textoAncla={<span class="material-symbols-outlined" id='iconHeader'>
                        account_circle
                    </span>}
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/"
                    textoAncla="Registro"
                />
            </div>

        </div>

    </div>
  )
}
