import React from 'react'
import { Anclas } from '../../UI/Anclas'

export const ContainerProfile = () => {
  return (
    <div id='ProfileMain'>

      {/* Perfil parte Izquierda */}
      <section id='ProfileLeft'>

        <div id='UserProfileUp'>

          <div id='imgUser'>

          </div>

          <p>Jeyson Grisales</p>

        </div>

        <div id='UserProfileDown'>

          <div id='anchorsInfo'>

            <Anclas
              estilos="AnInfo"
              enlace=""
              textoAncla="Sobre mi"
            />

            <Anclas
              estilos="AnInfo"
              enlace=""
              textoAncla="Historial"
            />

            <Anclas
              estilos="AnInfo"
              enlace=""
              textoAncla="Chat"
            />

            <Anclas
              estilos="AnInfo"
              enlace=""
              textoAncla="⭐⭐⭐⭐⭐"
            />

          </div>

        </div>

      </section>

      {/* Perfil parte Derecha */}
      <section id='ProfileRight'>

        <Anclas
          estilos="AnOptions"
          enlace=""
          textoAncla="Configuracion"
        />

        <Anclas
          estilos="AnOptions"
          enlace=""
          textoAncla="Mis Datos"
        />

        <Anclas
          estilos="AnOptions"
          enlace=""
          textoAncla="Seguridad"
        />

        <Anclas
          estilos="AnOptions"
          enlace=""
          textoAncla="Otros..."
        />

      </section>

    </div>
  )
}
