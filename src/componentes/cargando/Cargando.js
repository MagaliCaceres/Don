//        IMPORTACIONES

// Modulos

// Estilos
import './Cargando.css'

// Componentes
import Spinner from 'react-bootstrap/Spinner';

// Core


//        LOGICA

// Función constructora
const Cargando = (
    
) =>{
    
    return(
        <div className='cargando'>
            <Spinner className='icon_cargando' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    )
}


//        EXPORTACIÓN
export default Cargando