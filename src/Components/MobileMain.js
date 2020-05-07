import React from 'react'
import ViewPerson from './ViewPerson'
import ViewResume from './ViewResume'
import ViewPortafolio from './ViewPortafolio'
import ViewContact from './ViewContact'

function MobileMain() {
    return (
        <div className=''>
            <ViewPerson/>
            <ViewResume/>
            <ViewPortafolio/>
            <ViewContact/>
        </div>
    )
}

export default MobileMain
