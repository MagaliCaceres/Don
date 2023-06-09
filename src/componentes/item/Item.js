//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';

// Estilos
import './Item.css'

// Componentes
import Card from 'react-bootstrap/Card';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';



// Core


//        LOGICA

// Función constructora
const Item = ({item}) =>{
    
    return(
        <div className='contenedor_carta_detalle'>
            <Card className='carta' style={{ width: '18rem'}}>
                <div className='contenedor_img'>
                    <Card.Img variant="top" className='img_carta' src={item.img} alt={item.nombre} />
                </div>
                <Card.Body>
                    <Card.Title className='titulo_carta'>{item.nombre}</Card.Title>
                    <div className='descripcion_carta'>

                        <h6>Cant. de Elementos: <span> {item.elementoscant} </span></h6>
                        <h6>Modelo: <span> {item.modelo} </span></h6>

                    </div>
                    <div className='vermas_contenedor'>
                        <Link to={`/producto/${item.id}`}><MdOutlineKeyboardArrowRight className='icon_vermas'/></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}


//        EXPORTACIÓN
export default Item