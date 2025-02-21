//        IMPORTACIONES

// Modulos
import { Link} from 'react-router-dom';
import { useAuth } from '../../contexto/contexto';

// Estilos
import './Home.css'

// Componentes


import { MdEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

import Card from 'react-bootstrap/Card';

import Spinner from 'react-bootstrap/Spinner';

import { RiUserFill } from 'react-icons/ri';






// Core


//        LOGICA

// Función constructora
const Home = () =>{

    
    // USUARIO
    const {user, logOut, loading} = useAuth()
    
    // CERRAR SESION
    const handleLogout = async () => {
        await logOut()
    }

    if(loading) return <div>
    <div className='cargando'>
<Spinner className='icon_cargando' animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
</div>

</div>


    return(
        <div className='contenedor_home'>

             {/* USUARIO */}
            <div className='usuario'>
                <div>
                    <p className='icon_user_'><RiUserFill/> {user.email}</p>
                    <div className='salir'>
                        <button onClick={handleLogout} > 
                            Salir
                        </button>
                    </div>
                </div>
            </div>


            {/* HOME */}
            <div className='presentacion_home'>
                <div className='texto_presentacion'>
                    <h1> DON </h1>
                    <h3>Fábrica de Accesorios para Carpintería de Aluminio.</h3>
                </div>

                <div className='presentacion_logo'>
                    <img src="/img/home.png" alt="Imagen de Manjia Modelo..."></img>
                </div>
            </div>
            <div className='triangulo'>
                    <img src="/img/diseñoHome.png" alt="."></img>
            </div>


            {/* CATEGORIAS */}
            <div className='categorias'>

                <div className='cartas_categorias'>
                    {/* MANIJAS */}
                    <div className='carta_categorias'>
                        <div className='imagen_categoria'>
                            <Link to="/categoria/Manijas"><img src="/img/Manijas.png" alt="imagen de manija para caracterizar la categoria de manijas"></img></Link> 
                        </div>
                        <p><Link to="/categoria/Manijas" className='nombre_categoria'>Manijas</Link></p>
                    </div>

                    {/* FLEJES */}
                    <div className='carta_categorias'>
                        <div className='imagen_categoria'>
                            <Link to="/categoria/Flejes"><img src="/img/Flejes.png" alt="imagen de fleje para caracterizar la categoria de Flejes"></img></Link> 
                        </div>
                        <p><Link to="/categoria/Flejes" className='nombre_categoria'>Flejes</Link></p>
                    </div>
                </div>

                <div className='cartas_categorias'>
                    {/* CIERRES */}
                    <div className='carta_categorias'>
                        <div className='imagen_categoria'>
                            <Link to="/categoria/Cierres"><img src="/img/Cierres.png" alt="imagen de cierre para caracterizar la categoria de Cierres"></img></Link> 
                        </div>
                        <p><Link to="/categoria/Cierres" className='nombre_categoria'>Cierres</Link></p>
                    </div>

                    {/* BISAGRAS */}
                    <div className='carta_categorias'>
                        <div className='imagen_categoria'>
                            <Link to="/categoria/Bisagras"><img src="/img/Bisagras.png" alt="imagen de cierre para caracterizar la categoria de Bisagras"></img></Link> 
                        </div>
                        <p><Link to="/categoria/Bisagras" className='nombre_categoria'>Bisagras</Link></p>
                    </div>
                </div>
                
            </div>

            

            {/* NOSOTROS */}
            <div className='nosotros'>
                <div className='img_fondo'>
                    <div className='contenido_nosotros'>
                        <h2>Nosotros</h2>
                        <p>Somos una empresa joven, ubicada en la localidad de Avellaneda. Dedicada a la fabricación de accesorios para carpinterias de aluminio.</p>
                        <p>Nuestro objetivo esta centrado en garantizar un desempeño optimo en los diferentes proceos de fabricación, evaluación y comercialización del producto, como tambien brindar las mejores soluciones a las necesidades que presenta el mercado actual.</p>
                        <img src="/img/LogoDon.png" alt="Logo de Don"></img>
                    </div>
                </div>
            </div>

            
            {/* COMUNICACIÓN */}

            <div className='cartas_comunicacion'>
                <div className='cartas_com_'>
                    <Card className='carta_com' style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className='icon_email'>
                                <MdEmail className="email_"/>
                            </div>
                            <p className='titulo_carta_com'>Email:</p>
                            <p className='texto_carta_com'>example@gmail.com</p>
                        </Card.Body>
                    </Card>

                    <Card className='carta_com' style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className='icon_email'>
                                <MdPhone className="email_"/>
                            </div>
                            <p className='titulo_carta_com'>Telefono:</p>
                            <p className='texto_carta_com'>11 1111-1111</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}


//        EXPORTACIÓN
export default Home