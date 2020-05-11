import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiBootstrap} from 'react-icons/di'
import Text from './Text.json'

function ViewCode() {
    console.log('render Code')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].code
    }else{
        TextSelect = Text[1].code
    }

    return (
        <div className='view_expose text-left'>
            <div className='p-4'>
                <h5 className='section_title'>{TextSelect.title}</h5>
                <p>{TextSelect.co11}</p>
                <div>
                    <AiFillHtml5 size='40px' color='#FF7300'/>
                    <DiCss3 size='40px' color='#2881b8'/>
                    <DiReact size='40px' color='#2C2F73'/>
                    <DiBootstrap size='40px' color='#022873'/>
                </div>
                <p className='mt-3'>{TextSelect.co12}</p>
                <p className='mt-3'>{TextSelect.co13}</p>
                <a href='https://github.com/Gabriel6go8d/curriculum-vitae-2'>https://github.com/Gabriel6go8d/curriculum-vitae-2</a>
            </div>
        </div>
    )
}

export default ViewCode
