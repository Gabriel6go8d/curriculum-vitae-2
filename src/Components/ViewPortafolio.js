import React from 'react'
import ProjectCard from './ProjectCard'


function ViewPortafolio() {

    const List = [
        {
            id: 1,
            src: 'https://images4.alphacoders.com/878/8788.png',
            name: 'Project Name',
            desc: 'Officia esse do duis incididunt et labore ut officia.',
            know: 'Cillum excepteur voluptate aute culpa laboris excepteur voluptate aute culpa laboris excepteur voluptate aute culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.'
        },
        {
            id: 2,
            src: 'https://images4.alphacoders.com/878/8788.png',
            name: 'Project Name',
            desc: 'Officia esse do duis incididunt et labore ut officia.',
            know: 'Cillum excepteur voluptate aute culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.culpa laboris labore.'
        },
        {
            id: 3,
            src: 'https://images4.alphacoders.com/878/8788.png',
            name: 'Project Name',
            desc: 'Officia esse do duis incididunt et labore ut officia.',
            know: 'Cillum excepteur voluptate aute culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.'
        },
        {
            id: 4,
            src: 'https://images4.alphacoders.com/878/8788.png',
            name: 'Project Name',
            desc: 'Officia esse do duis incididunt et labore ut officia.',
            know: 'Cillum excepteur voluptate aute culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.culpa laboris consequat duis incididunt nulla labore.'
        },
    ]


    return (
        <div className='view_expose text-left'>
            <div className='myScroll'>
                
                <div className='row m-0 p-0 justify-content-center projects_area'>
                    <h5 className='col-11 section_title mt-4'>Portafolio</h5>
                    <div className='col-10 col-md-5 text-left m-0 p-0 mt-2'>                                
                        <ProjectCard values={List[0]}/>
                        <div className='divider mt-3 mb-3'/>
                        <ProjectCard values={List[1]}/>
                    </div>

                    <div className='vertical_divider2 ml-3 mr-3 movilhidde'/>
                    <div className='divider mt-3 mb-3 movilshow'/>

                    <div className='col-10 col-md-5 m-0 p-0 text-left mt-2'>                    
                        <ProjectCard values={List[2]}/>
                        <div className='divider mt-3 mb-3'/>
                        <ProjectCard values={List[3]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPortafolio
