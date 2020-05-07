import React from 'react'
import {FaUser, FaBriefcase, FaPhone} from 'react-icons/fa'
import {IoIosDocument} from 'react-icons/io'

function ViewButtoms(prop) {
    return (
        <div className='myNav'>
            <div className='item' onClick={() => prop.action('about')}>                
                <FaUser size='13px' color='blue'/>
                <p>Sobre Mi</p>
            </div>
            <div className='item' id='go_resume' onClick={() => prop.action('resume')}>
                <IoIosDocument size='13px' color='blue'/>
                <p>CV</p>
            </div>
            <div className='item' id='go_portafolio' onClick={() => prop.action('portafolio')}>
                <FaBriefcase size='13px' color='blue'/>
                <p>Projectos</p>
            </div>
            <div className='item' id='go_contact' onClick={() => prop.action('contact')}>
                <FaPhone size='13px' color='blue'/>
                <p>Contacto</p>
            </div>
        </div>
    )
}

export default ViewButtoms
