import React from 'react'
import {Form} from 'react-bootstrap'
import Text from './Text.json'

function ViewContact() {
    console.log('render Contact')

    const language = document.documentElement.lang
    var TextSelect = ''
    if(language === 'ES'){
        TextSelect = Text[0].contact
    }else{
        TextSelect = Text[1].contact
    }

    return (
        <div className='view_expose text-left'>
            <div className='movilshow' style={{padding: '30px', width: '100%'}}>
                <h5 className='section_title'>{TextSelect.title}</h5> 
                <h5>{TextSelect.address1}</h5>
                <p>{TextSelect.address2}</p>
                <h5>{TextSelect.phone1}</h5>
                <a href='tel: +34 625967964'>{TextSelect.phone2}</a>
                <h5 className='mt-3'>{TextSelect.email1}</h5>
                <a href='mailto:gabriel.ares93@gmail.com'>{TextSelect.email2}</a>       
            </div>

            <div className='contact_form'>
                <Form action="https://formspree.io/mbjzjvjz" method="POST">
                    <Form.Group>
                        <Form.Label for='formcontrol1'>{TextSelect.c11}</Form.Label>
                        <Form.Control type="text" name="name" placeholder={TextSelect.c12} id='formcontrol1'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for='formcontrol2'>{TextSelect.c21}</Form.Label>
                        <Form.Control type="email" placeholder={TextSelect.c22} name="_replyto" id='formcontrol2'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for='formcontrol3'>{TextSelect.c31}</Form.Label>
                        <Form.Control as="textarea" rows="4" name="message" id='formcontrol3'/>
                    </Form.Group>
                    <button className='btn btn-primary' type='submit'>{TextSelect.cb}</button>
                </Form>
            </div>
        </div>
    )
}

export default ViewContact
