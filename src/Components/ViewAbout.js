import React from 'react'

function ViewAbout() {
    return (
        <div className='view_expose'>
            <div className='row m-0 p-0 justify-content-center' style={{height: '100%'}}>

                <div className='col-6 text-left m-0 p-0 mt-5 about_left'>
                    <div style={{display: 'flex'}}>
                        <h5>Sobre</h5>
                        <h5>Mi</h5>
                    </div>
                    
                    <p>Hola, mi nombre es Gabriel y soy un Ing. en Telecomunicaciones que le encanta la programación. Cada dia se presentan nuevos retos y con ellos nuevos caminos, nuevas formas de ver las cosas y posibilidades de mejorar. Soy una persona muy activa y con una actitud positiva ante el trabajo. Me gustan los retos y trabajar en equipo.</p>
                </div>

                <div className='vertical_divider2 ml-3 mr-3'/>

                <div className='col-4 m-0 p-0 text-left mt-5 about_rigth'>
                    <h5>Dirección</h5>
                    <p>Madrid, 28038, España</p>
                    <h5>Telefono</h5>
                    <p>+34 625967964</p>
                </div>
            </div>
        </div>
    )
}

export default ViewAbout
