import React from 'react'
import ProjectCard from './ProjectCard'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import List from './Projects.json'

function ViewPortafolio() {    
    console.log('render Portfolio')

    const language = document.documentElement.lang
    var data = ''
    if(language === 'ES'){
        data = List[0].data
    }else{
        data = List[1].data
    }
    const infos = data.map(xx => <ProjectCard values={xx} key={xx.id}/>).reverse()

    const goTop = () => {
        console.log('press')
        document.getElementById('myScroll').scrollTo({
            top: 0, 
            behavior: "smooth" // smooth scroll.
        });  
    }

    return (
        <div className='view_expose text-left'>
            <div className='myScroll' id='myScroll'>  
                <h5 className='section_title mt-4 ml-md-5'>Portafolio</h5>  
                {infos}
                <div className='mt-5 mr-5 mb-5 text-right movilhidde' >
                    <IoIosArrowDropupCircle size='40px' color='#2881b8' style={{cursor: 'pointer'}} onClick={goTop} />
                </div>
            </div>
        </div>
    )
}

export default ViewPortafolio
