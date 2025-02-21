//        IMPORTACIONES

// Modulos
import React, { useState } from 'react';


// Estilos
import './ItemDetailElements.css'

// Componentes
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';


import { MdOutlineKeyboardArrowRight } from 'react-icons/md';


// Core


//        LOGICA

// Función constructora
const ItemDetailElements = ({path}) =>{


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <div className='contenedor_elemento'>
            <Card className='carta_elemento' style={{ width: '18rem' }}>
                    <div className='imagen_elemento_contenedor'>
                        <Card.Img variant="top" className='imagen_elemento' src={path.img} alt="-"/>
                    </div>
                <Card.Body>
                    <Card.Title className='nombre_elemento'>{path.nombre}</Card.Title>   
                    <div className='info_elemento'>
                        <p>Cantidad: <span> {path.cantidad}  </span></p>
                        <p>Categoria: <span> {path.categoria}  </span></p>
                    </div> 

                    {/* VER MAS */}
                    
                    <div className='vermas_contenedor'>
                        <MdOutlineKeyboardArrowRight onClick={handleShow} className='icon_vermas_elemento'/>
                    </div>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <div className='info_modal'>
                            <h2>{path.nombre}</h2>

                            <div className='informacion_modal'>
                                {/* IMAGEN */}
                                <div className='imagen_modal'>
                                    <img src={path.img} alt="-"></img>
                                </div>
                            

                                {/* INFO */}
                                <div className='data_modal'>
                                    <div>
                                        
                                        <p className='descripcion_modal'>{path.desc}</p>

                                        <div className='detalles_modal'>
                                            <div>
                                                <p>Cantidad: <span> {path.cantidad}  </span></p>
                                                <p>Categoria: <span> {path.categoria}  </span></p>
                                            </div>

                                            <div>
                                                <p>Proveedor: <span> {path.proveedor}  </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                            </div>
                        </div>

                    </Modal>








                    
                </Card.Body>
            </Card>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemDetailElements