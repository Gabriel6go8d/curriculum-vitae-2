import React, {useState} from 'react'
import ViewPerson from './ViewPerson'
import ViewAbout from './ViewAbout'
import ViewButtoms from './ViewButtoms'
import ViewResume from './ViewResume'
import ViewPortafolio from './ViewPortafolio'
import ViewContact from './ViewContact'

function Main() {

    const [toShow, setToShow] = useState(<ViewAbout/>)

    const ChangeView = (view) => {
        document.getElementById('exposer').classList.add('exposer_hide')        
        setTimeout(()=>{
            switch (view){
                case 'about':
                    setToShow(<ViewAbout/>)
                    break
                case 'resume':
                    setToShow(<ViewResume/>)
                    break
                case 'portafolio':
                    setToShow(<ViewPortafolio/>)
                    break
                case 'contact':
                    setToShow(<ViewContact/>)
                    break
                default:
                    break
            }
            document.getElementById('exposer').classList.remove('exposer_hide')
        }, 300)
    }

    return (
        <div className='container'>        
            <div className='content'>
                <div className='row m-0 p-0 justify-content-center'>
                    <div className='col-1 m-0 p-0'>
                        <ViewButtoms action={ChangeView}/>
                    </div>
                    <div className='col-4 m-0 p-0'>
                        <ViewPerson action={ChangeView}/>
                    </div>
                    <div className='col-7 m-0 p-0 view_exposer' id='exposer'>
                        {toShow}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
