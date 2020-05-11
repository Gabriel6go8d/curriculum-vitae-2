import React from 'react'

function SkillPiece(prop) {

    const toShow = prop.data.map((xx, index) => <div className='mr-2 mt-1' key={index}
                                        style={{backgroundColor: '#a2d6f7', borderRadius: '8px'}}>
                                        <p className='ml-2 mr-2 mt-0' style={{fontSize:'15px', marginBottom: '0px'}}>{xx}</p></div>)

    return (
        <div className='row justify-content-center m-0 p-0 mt-3 mb-5'>
            <div className='col-4'>
                {prop.icon}
            </div>
            <div className='col-6 m-0 p-0 text-left'>
                <h5>{prop.label}</h5>
                <div className='row m-0 p-0'>                        
                    {toShow}
                </div>
            </div>
        </div>
         
    )
}

export default SkillPiece
