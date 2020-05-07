import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'

function ProjectCard(prop) {
    return (
        <div className='myCard'>
            <img alt='ProjectImg' src={prop.values.src}></img>
            <p>{prop.values.name}</p>                    
            <div className='tecnologies'>
                <h5>Tecnologías: </h5>
                <AiFillHtml5 size='30px' color='#2881b8'/>
                <DiCss3 size='30px' color='#2881b8'/>
                <DiReact size='30px' color='#2881b8'/>
                <DiBootstrap size='30px' color='#2881b8'/>
            </div>
            <p>{prop.values.desc}</p>
            <p className='mt-2'>Que Aprendí ?</p>
            <p className='mt-1'>{prop.values.know}</p>
        </div>
    )
}

export default ProjectCard
