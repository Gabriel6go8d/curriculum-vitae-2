import React, {useState, useEffect} from 'react'
import {FaUser, FaBriefcase, FaPhone, FaCode} from 'react-icons/fa'
import {IoIosDocument} from 'react-icons/io'
import {BsFillLightningFill} from 'react-icons/bs'

function ViewButtoms(prop) {

    const [language, setLanguange] = useState(document.documentElement.lang)
    const [buttonsText, setButtonsText] = useState(['Sobre Mi', 'Curricúlo', 'Habilidad', 'Portafolio', 'Contacto', 'Código'])

    useEffect(()=>{
        if(language === 'EN'){
            setButtonsText(['About Me', 'Resume', 'Skills', 'Portfolio', 'Contact', 'Code', 'EN', 'ES'])            
        }else{
            setButtonsText(['Sobre Mi', 'Curricúlo', 'Habilidad', 'Portafolio', 'Contacto', 'Código', 'ES', 'EN'])
        }
    }, [language])

    const changeLang = () =>{
        var setL = ''
        if(language==='EN'){
            setL = 'ES'
            document.getElementById('name_desc').innerText = 'Desarrollador Web'
            document.getElementById('bu1').innerText = 'Descargar CV'
            document.getElementById('bu2').innerText = 'Contactar'
        }else{
            setL = 'EN'
            document.getElementById('name_desc').innerText = 'Web Developer'
            document.getElementById('bu1').innerText = 'Download CV'
            document.getElementById('bu2').innerText = 'Contact'
        }
        setLanguange(setL)
        document.documentElement.setAttribute('lang', setL)
        localStorage.setItem('lang', setL)        
        prop.action('reload')
    }

    return (
        <div className='myNav'>
            <div className='item' onClick={() => prop.action('about')}>   
                <div>
                    <FaUser size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[0]}</p>
            </div>
            <div className='item' onClick={() => prop.action('resume')}>
                <div>
                    <IoIosDocument size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[1]}</p>
            </div>
            <div className='item' onClick={() => prop.action('habilidades')}>
                <div>
                    <BsFillLightningFill size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[2]}</p>
            </div>
            <div className='item' onClick={() => prop.action('portafolio')}>
                <div>
                    <FaBriefcase size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[3]}</p>
            </div>
            <div className='item' onClick={() => prop.action('contact')}>
                <div>
                    <FaPhone size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[4]}</p>
            </div>
            <div className='item' onClick={() => prop.action('codigo')}>
                <div>
                    <FaCode size='16px' color='#2881b8' className='item_icon'/>
                </div>
                <p>{buttonsText[5]}</p>
            </div>
            <div className='item lang' onClick={changeLang}>
                <h5>{buttonsText[6]}</h5>
                <p>{buttonsText[7]}</p>
            </div>
        </div>
    )
}

export default ViewButtoms
