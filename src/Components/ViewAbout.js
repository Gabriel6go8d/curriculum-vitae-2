import React from 'react'
import {IoLogoGameControllerB} from 'react-icons/io'
import {FaHatWizard} from 'react-icons/fa'
import {GiFilmProjector} from 'react-icons/gi'
import Text from './Text.json'

function ViewAbout() {
    console.log('render About')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].about
    }else{
        TextSelect = Text[1].about
    }
    

    return (
        <div className='view_expose'>
            <div className='row m-0 p-0 justify-content-center' style={{height: '100%'}}>

                <div className='col-10 col-md-6 text-left m-0 p-0 mt-4 about_left'>
                    <div style={{display: 'flex'}}>
                        <h5>{TextSelect.title1}</h5>
                        <h5>{TextSelect.title2}</h5>
                    </div>
                    
                    <p>{TextSelect.desc}</p>
                </div>

                <div className='vertical_divider2 ml-3 mr-3'/>

                <div className='col-10 col-md-4 m-0 p-0 mt-4 text-left about_rigth'>
                    <h5>{TextSelect.address1}</h5>
                    <p>{TextSelect.address2}</p>

                    <h5>{TextSelect.phone1}</h5>
                    <a href='tel: +34 625967964'>{TextSelect.phone2}</a>

                    <h5 className='mt-3'>{TextSelect.email1}</h5>
                    <a href='mailto:gabriel.ares93@gmail.com'>{TextSelect.email2}</a>
                    
                    <h5 className='mt-3'>{TextSelect.interest1}</h5>
                    <div className='row m-0 p-0 justify-content-around'>
                        <div className='col-4 text-center m-0 p-0'>
                            <IoLogoGameControllerB size='30px' color='#2881b8' style={{height: '30px'}}/>
                            <p>{TextSelect.interest2}</p>
                        </div>
                        <div className='col-4 text-center m-0 p-0'>
                            <FaHatWizard size='24px' color='#2881b8' style={{height: '30px'}}/>
                            <p>{TextSelect.interest3}</p>
                        </div>
                        <div className='col-4 text-center m-0 p-0'>
                            <GiFilmProjector size='30px' color='#2881b8' style={{height: '30px'}}/>
                            <p>{TextSelect.interest4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAbout
