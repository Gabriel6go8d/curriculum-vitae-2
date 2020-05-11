import React from 'react'
import Text from './Text.json'

function ViewResume() {
    console.log('render Resume')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].resume
    }else{
        TextSelect = Text[1].resume
    }

    return (
        <div className='view_expose'>
            <div className='row m-0 p-0 justify-content-center' style={{height: '100%'}}>

                <div className='col-10 col-md-5 text-left m-0 p-0 mt-4'>
                    <h5 className='section_title'>{TextSelect.title1}</h5>                    
                    
                    <div className='experiencia mt-3'>
                        <p>{TextSelect.ex11}</p>
                        <p>{TextSelect.ex12}</p>
                        <p>{TextSelect.ex13}</p>
                        <p>{TextSelect.ex14}</p>
                        <p>{TextSelect.ex15}</p>
                    </div>

                    <div className='divider mt-3 mb-3'></div>

                    <div className='experiencia'>
                        <p>{TextSelect.ex21}</p>
                        <p>{TextSelect.ex22}</p>
                        <p>{TextSelect.ex23}</p>
                        <p>{TextSelect.ex24}</p>
                        <p>{TextSelect.ex25} </p>
                    </div>
                </div>

                <div className='vertical_divider2 ml-3 mr-3 movilhidde'/>
                
                <div className='col-10 col-md-5 m-0 p-0 text-left mt-4'>
                    <h5 className='section_title'>{TextSelect.title2}</h5>

                    <div className='experiencia mt-3'>
                        <p>{TextSelect.ed11}</p>
                        <p>{TextSelect.ed12}</p>
                        <p>{TextSelect.ed13}</p>
                        <p>{TextSelect.ed14}</p>                        
                    </div>

                    <div className='divider mt-3 mb-3'></div>

                    <div className='experiencia'>
                        <p>{TextSelect.ed21}</p>
                        <p>{TextSelect.ed22}</p>
                        <p>{TextSelect.ed23}</p>
                        <p>{TextSelect.ed24}</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewResume
