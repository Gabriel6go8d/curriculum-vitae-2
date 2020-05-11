import React from 'react'
import {Image} from 'react-bootstrap'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Text from './Text.json'

function ViewPerson(prop) {
    console.log('render Person')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].person
    }else{
        TextSelect = Text[1].person
    }

    return (
        <div className='view_person shadow' >
            
            <img alt='backshape' className='shape' src={require('../Images/fondo.png')}></img>
            <Image className='img_person' alt='Gabriel' src={require('../Images/gabriel5.jpg')} roundedCircle></Image>

            <h3 className='name_user mt-5'>Gabriel Gutierrez</h3>
            <h5 className='name_desc' id='name_desc'>{TextSelect.desc1}</h5>

            <div className='social_links'>                
                <AiFillGithub size='25px' color='#2881b8' className='link' onClick={() => window.location.href = 'https://github.com/Gabriel6go8d'}/>
                <AiFillLinkedin size='25px' color='#2881b8' className='ml-3 link' onClick={() => window.location.href = 'https://www.linkedin.com/in/gabriel-gutierrez-infante-aa1762125/'}/>
            </div>

            <p className='movilshow m-5'>{TextSelect.desc2}</p>

            <div className='view_person_footer'>
                <div className='divider'/>
                <div className='buttons'>
                    <div className='but' id='bu1' onClick={() => window.location = process.env.PUBLIC_URL + '/CV.docx'}>
                        {TextSelect.bu1}
                    </div>
                    <div className='vertical_divider'/>
                    <div className='but' id='bu2' onClick={() => window.location = 'mailto:gabrie.ares93@gmail.com'}>
                        {TextSelect.bu2}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ViewPerson
