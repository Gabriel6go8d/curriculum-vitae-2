import React from 'react'
import {FaUser, FaBriefcase, FaPhone, FaCode} from 'react-icons/fa'
import {IoIosDocument} from 'react-icons/io'

function ViewButtoms(prop) {
    return (
        <div className='myNav'>
            <div className='item' onClick={() => prop.action('about')}>   
                <div>
                    <FaUser size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>Sobre Mi</p>
            </div>
            <div className='item' id='go_resume' onClick={() => prop.action('resume')}>
                <div>
                    <IoIosDocument size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>Curricúlo</p>
            </div>
            <div className='item' id='go_portafolio' onClick={() => prop.action('portafolio')}>
                <div>
                    <FaBriefcase size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>Portafolio</p>
            </div>
            <div className='item' id='go_contact' onClick={() => prop.action('contact')}>
                <div>
                    <FaPhone size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>Contacto</p>
            </div>
            <div className='item' id='go_contact' onClick={() => prop.action('contact')}>
                <div>
                    <FaCode size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>Código</p>
            </div>
        </div>
    )
}

export default ViewButtoms
