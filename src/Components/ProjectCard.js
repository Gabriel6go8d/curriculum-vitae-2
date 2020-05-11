import React, {useState, useRef, useEffect} from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'

function ProjectCard(prop) {
    console.log('render Card')

    const language = document.documentElement.lang
    const [theText, setTheText] = useState('')    
    const [bol, setBol] = useState(true)
    const myCardRef = useRef(null)

    const openToggle = () => {
        if(bol){
            myCardRef.current.classList.add('myCardOpen')
        }else{
            myCardRef.current.classList.remove('myCardOpen')
        }    
        setBol(!bol)    
    }

    const [toShow, setToShow] = useState('')
    useEffect(() => {
        var array = []
        for(var i = 0; i < prop.values.tec.length; i++){
            switch (prop.values.tec[i]){
                case 'html':
                    array.push(<AiFillHtml5 size='30px' color='#FF7300'/>)
                    break
                case 'css':
                    array.push(<DiCss3 size='30px' color='#2881b8'/>)
                    break
                case 'react':
                    array.push(<DiReact size='30px' color='#2C2F73'/>)
                    break
                case 'bootstrap':
                    array.push(<DiBootstrap size='30px' color='#022873'/>)
                    break
                case 'axios':
                    array.push(<img alt='axios' src={require('../Images/axios.png')} style={{height: '30px'}}></img>)
                    break
                case 'openweather':
                    array.push(<img alt='axios' src={require('../Images/openweather.png')} style={{height: '30px'}}></img>)
                    break
                default:
                    break
            }
        }
        setToShow(array)

        if(language === 'ES'){
            setTheText(['Tecnologías:', 'Ver Página', 'Ver Código', 'Mostrar Más'])
        }else{
            setTheText(['Tecnologies:', 'See Page', 'See Code', 'Show More'])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const matches = window.matchMedia('(min-width:1000px)').matches  
    var projectImgUrl = ''
    if(matches){
        projectImgUrl = require(`../Images/project${prop.values.id}a.png`)
    }else{
        projectImgUrl = require(`../Images/project${prop.values.id}.png`)
    }

    return (
        <React.Fragment>
            
            <div className='myCard m-4' ref={myCardRef}>
                <div className='row m-0 p-0 justify-content-between'>
                    <div className='col-12 col-md-5'>
                        <img alt='ProjectImg' className='card_img' src={projectImgUrl} onClick={()=> window.location = prop.values.page}></img>
                    </div>
                    <div className='col-12 col-md-7'>
                        <p>{prop.values.name}</p>   
                        <h5 className='tecnologies_label'>{theText[0]}</h5>                 
                        <div className='tecnologies'>                            
                            {toShow}
                        </div>
                        <p>{prop.values.desc}</p>
                        <div className='mt-2'>
                            <button className='btn btn-primary btn-sm' onClick={()=> window.location = prop.values.page}>{theText[1]}</button>
                            <button className='btn btn-info btn-sm ml-3' onClick={()=> window.location = prop.values.code}>{theText[2]}</button>
                        </div>
                        <div className='trigger_MyTooltip' onClick={openToggle}>{theText[3]}</div>                    
                    </div>                    
                </div>  
                <div className='cardDesc'>{prop.values.know}</div>          
            </div>
            <div className='divider'></div>
        </React.Fragment>
    )
}

export default ProjectCard
