import React from 'react'
import {FaLaptopCode, FaNewspaper, FaCogs, FaMobileAlt} from 'react-icons/fa'

function SkillPiece(prop) {

    const colorIcons = '#2881b8'
    const sizeIcons = '60px'   
    const colorBubble = '#a2d6f7' //#D9D9D9 light-gray and #a2d6f7 light-blue

    const toShow = prop.data.map((xx, index) => <div className='mr-2 mt-1' key={index}
                                        style={{backgroundColor: colorBubble, borderRadius: '8px'}}>
                                        <p className='ml-2 mr-2 mt-0' style={{fontSize:'15px', marginBottom: '0px'}}>{xx}</p></div>)

    var icon = '' 
    switch(prop.icon){
        case 'laptop':
            icon = <FaLaptopCode size={sizeIcons} color={colorIcons}/>
            break
        case 'paper':
            icon = <FaNewspaper size={sizeIcons} color={colorIcons}/>
            break
        case 'cogs':
            icon = <FaCogs size={sizeIcons} color={colorIcons}/>
            break
        case 'mobil':
            icon = <FaMobileAlt size={sizeIcons} color={colorIcons}/>
            break
        default:
            break
    }

    return (
        <div className='row justify-content-center m-0 p-0 mt-3 mb-5' style={{minHeight: '130px'}}>
            <div className='col-4'>
                {icon}
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
