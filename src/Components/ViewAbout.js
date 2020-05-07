import React from 'react'
import {IoLogoGameControllerB} from 'react-icons/io'
import {FaHatWizard} from 'react-icons/fa'
import {GiFilmProjector} from 'react-icons/gi'

function ViewAbout() {
    return (
        <div className='view_expose'>
            <div className='row m-0 p-0 justify-content-center' style={{height: '100%'}}>

                <div className='col-10 col-md-6 text-left m-0 p-0 mt-4 about_left'>
                    <div style={{display: 'flex'}}>
                        <h5>Sobre</h5>
                        <h5>Mi</h5>
                    </div>
                    
                    <p>Hola, mi nombre es Gabriel y soy un Ing. en Telecomunicaciones que le encanta la programación. Cada dia se presentan nuevos retos y con ellos nuevos caminos, nuevas formas de ver las cosas y posibilidades de mejorar. Soy una persona muy activa y con una actitud positiva ante el trabajo. Me gustan los retos y trabajar en equipo.</p>
                </div>

                <div className='vertical_divider2 ml-3 mr-3'/>

                <div className='col-10 col-md-4 m-0 p-0 mt-4 text-left about_rigth'>
                    <h5>Dirección</h5>
                    <p>Madrid, 28038, España</p>

                    <h5>Telefono</h5>
                    <a href='tel: +34 625967964'>+34 625967964</a>

                    <h5 className='mt-3'>Correo</h5>
                    <a href='mailto:gabriel.ares93@gmail.com'>gabriel.ares93@gmail.com</a>
                    
                    <h5 className='mt-3'>Intereses</h5>
                    <div className='row m-0 p-0 justify-content-around'>
                        <div className='col-4 text-center m-0 p-0'>
                            <IoLogoGameControllerB size='30px' color='#2881b8' style={{height: '30px'}}/>
                            <p>Game</p>
                        </div>
                        <div className='col-4 text-center m-0 p-0'>
                            <FaHatWizard size='24px' color='#2881b8' style={{height: '30px'}}/>
                            <p>Anime</p>
                        </div>
                        <div className='col-4 text-center m-0 p-0'>
                            <GiFilmProjector size='30px' color='#2881b8' style={{height: '30px'}}/>
                            <p>Cine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAbout
