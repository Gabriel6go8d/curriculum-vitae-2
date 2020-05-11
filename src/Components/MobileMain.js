import React from 'react'
import ViewPerson from './ViewPerson'
import ViewResume from './ViewResume'
import ViewPortafolio from './ViewPortafolio'
import ViewContact from './ViewContact'
import ViewSkills from './ViewSkills'

function MobileMain() {
    return (
        <div className=''>
            <ViewPerson/>
            <ViewResume/>
            <ViewSkills/>
            <ViewPortafolio/>
            <ViewContact/>
        </div>
    )
}

export default MobileMain
