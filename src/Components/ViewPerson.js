import React from 'react'
import {Image} from 'react-bootstrap'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function ViewPerson(prop) {
    return (
        <div className='view_person shadow' >
            
            <img alt='backshape' className='shape' src='https://www.ecopetit.cat/wpic/mpic/9-90545_fiordland-mountain-sunrise-4k-hd-4k-wallpapers-images.jpg'></img>
            <Image className='img_person' alt='Gabriel' src={require('../Images/gabriel5.jpg')} roundedCircle></Image>

            <h3 className='name_user mt-5'>Gabriel Gutierrez</h3>
            <h5 className='name_desc'>Desarrollador Web</h5>

            <div className='social_links'>                
                <AiFillGithub size='25px' color='#2881b8' className='link' onClick={() => window.location.href = 'https://github.com/Gabriel6go8d'}/>
                <AiFillLinkedin size='25px' color='#2881b8' className='ml-3 link' onClick={() => window.location.href = 'https://www.linkedin.com/in/gabriel-gutierrez-infante-aa1762125/'}/>
            </div>

            <p className='movilshow m-5'>Hola, mi nombre es Gabriel y soy un Ing. en Telecomunicaciones que le encanta la programación. Cada dia se presentan nuevos retos y con ellos nuevos caminos, nuevas formas de ver las cosas y posibilidades de mejorar. Soy una persona muy activa y con una actitud positiva ante el trabajo. Me gustan los retos y trabajar en equipo.</p>

            <div className='view_person_footer'>
                <div className='divider'/>
                <div className='buttons'>
                    <div className='but' onClick={() => window.location = 'CV.docx'}>
                        Descargar CV
                    </div>
                    <div className='vertical_divider'/>
                    <div className='but' onClick={() => window.location = 'mailto:gabrie.ares93@gmail.com'}>
                        Contactar
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ViewPerson
