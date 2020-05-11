import React from 'react'
import {FaLaptopCode, FaNewspaper, FaCogs, FaMobileAlt} from 'react-icons/fa'
import SkillPiece from './SkillPiece'
import Text from './Text.json'

function ViewSkills() {
    console.log('render Skills')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].skill
    }else{
        TextSelect = Text[1].skill
    }

    return (
        <div className='view_expose text-left'>
            <div className='row m-0 p-0 justify-content-center skill_section'>
                <h5 className='col-11 section_title mt-4 p-0'>{TextSelect.title}</h5>

                <div className='col-12 col-md-5 m-0 p-0'>
                    <SkillPiece label={TextSelect.sk11} data={['HTML', 'CSS', 'Javascript']} icon={<FaLaptopCode size='60px' color='#2881b8'/>}/>
                    <SkillPiece label={TextSelect.sk12} data={['Bootstrap', 'React']} icon={<FaNewspaper size='60px' color='#2881b8'/>}/> 
                </div>
                
                <div className='vertical_divider2 movilhidde'></div>  

                <div className='col-12 col-md-5 m-0 p-0'>
                    <SkillPiece label={TextSelect.sk13} data={['Laravel', 'PHP', 'MySQL', 'Axios']} icon={<FaCogs size='60px' color='#2881b8'/>}/>
                    <SkillPiece label={TextSelect.sk14} data={['Swift']} icon={<FaMobileAlt size='60px' color='#2881b8'/>}/> 
                </div>              
            </div>
        </div>
    )
}

export default ViewSkills
