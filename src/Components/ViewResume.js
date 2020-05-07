import React from 'react'

function ViewResume() {
    return (
        <div className='view_expose'>
            <div className='row m-0 p-0 justify-content-center' style={{height: '100%'}}>

                <div className='col-10 col-md-5 text-left m-0 p-0 mt-4'>
                    <h5 className='section_title'>Experiencia</h5>                    
                    
                    <div className='experiencia mt-3'>
                        <p>03/2016 - 09/2019</p>
                        <p>Administrador</p>
                        <p>MEGA</p>
                        <p>La Habana, Cuba</p>
                        <p>Administración Comercial
                            •	Servicio de Pre y Post-Venta
                            •	Venta de Productos y Servicios de Telefonía
                            </p>
                    </div>

                    <div className='divider mt-3 mb-3'></div>

                    <div className='experiencia'>
                        <p>09/2014 - 08/2017</p>
                        <p>Profesor</p>
                        <p>Universidad CUJAE</p>
                        <p>La Habana, Cuba</p>
                        <p>Impartir clases y laboratorios de pregrado
                            •	Realización de exámenes y calificación
                            </p>
                    </div>
                </div>

                <div className='vertical_divider2 ml-3 mr-3 movilhidde'/>
                
                <div className='col-10 col-md-5 m-0 p-0 text-left mt-4'>
                    <h5 className='section_title'>Educación</h5>

                    <div className='experiencia mt-3'>
                        <p>09/2019 - Present</p>
                        <p>MBA Master en Administracion de Empresa</p>
                        <p>Eude Business School</p>
                        <p>Madrid, España</p>                        
                    </div>

                    <div className='divider mt-3 mb-3'></div>

                    <div className='experiencia'>
                        <p>09/2012 - 08/2017</p>
                        <p>Ing. en Telecomunicaciones y Electrónica</p>
                        <p>Universidad CUJAE</p>
                        <p>La Habana, Cuba</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewResume
