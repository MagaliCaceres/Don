//        IMPORTACIONES

// Modulos

// Estilos
import './Footer.css'

// Componentes
import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCopyright } from "react-icons/fa";

// Core


//        LOGICA

// Función constructora
const Footer = () =>{
    
    return(
        <div>
            <div className='contenedor_footer'>
                <div className='info_footer'>
                    <p>Comunicación:</p>
                    <div className='linea_divisoria'></div>
                </div>
                <div className='comunicacion'>
                    {/* EMAIL */}
                    <div className='email'>
                        <a href='/#'> <MdEmail className="icon_footer"/> example@gmail.com</a>
                    </div>
                    {/* TELEFONO */}
                    <div className='telefono'>
                        <a href='/#'> <MdPhone className="icon_footer"/> 11 1111-1111</a>
                    </div>
                    {/* UBICACION */}
                    <div className='ubicacion'>
                        <a href='/#'> <FaMapMarkerAlt className="icon_footer"/> Calle Falsa 1234</a>
                    </div>
                </div>
            </div>
            <div className='footer_copyright'>
                <p><FaCopyright className='icon_copy'/> 2022 - DON - Sitio Web Desarrollado Por Magali Caceres.</p>
            </div>
        </div>

    )
}


//        EXPORTACIÓN
export default Footer