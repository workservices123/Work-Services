import React from 'react'
import { Anclas } from '../../UI/Anclas'
import { Barras } from '../../Iconos/Barras/Barras'
import { Configuracion } from '../../Iconos/Configuracion/Configuracion'

export const MenuLateral = () => {
  return (
    <section className='MenuLateralEstatico'>

        <div className='ContainerIconoBarras'>
            <Barras />
        </div>

        <div className='ContainerAnclas'>

            <nav className='MenuAnclas'>

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" zz
                    textoAncla="1"
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="2"
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="3"
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="4"
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="5"
                />

                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="6"
                />

            </nav>

        </div>

        <div className='ContainerIconoConfiguracion'>
            <Configuracion />
        </div>

    </section>
  )
}
