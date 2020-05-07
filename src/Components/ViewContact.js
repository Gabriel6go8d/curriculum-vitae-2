import React from 'react'
import {Form} from 'react-bootstrap'

function ViewContact() {
    return (
        <div className='view_expose text-left'>
            <div className='contact_form'>
                <Form action="https://formspree.io/mbjzjvjz" method="POST">
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="_replyto"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contenido</Form.Label>
                        <Form.Control as="textarea" rows="4" name="message"/>
                    </Form.Group>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </Form>
            </div>
        </div>
    )
}

export default ViewContact
