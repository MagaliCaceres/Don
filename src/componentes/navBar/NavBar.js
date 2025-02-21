//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';

// Estilos
import './NavBar.css'


// Componentes
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// Core

// BARRA DIVISORIA
// <NavDropdown.Divider />

//        LOGICA

// Función constructora
const NavBar = () =>{



    return(
        <Navbar expand="md">
            <Container>
                <Navbar.Brand>
                    <Link to="/home"> <img className='logo_nav' src="/img/LogoDon.png" alt="Logo de 'DON', rombo estirado, con los colores verde, negro y blanco."></img></Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto contenedor_menu">
                    <Link to="/home" className='link_productos'>Inicio</Link>
                    <Link to="/productos" className='link_productos'>Productos</Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <Link className='link_categoria' to="/categoria/Manijas">Manijas</Link>
                        <Link className='link_categoria' to="/categoria/Flejes">Flejes</Link>
                        <Link className='link_categoria' to="/categoria/Cerraduras">Cerraduras</Link>
                        <Link className='link_categoria' to="/categoria/Brazos">Brazos</Link>
                        <Link className='link_categoria' to="/categoria/Cierres">Cierres</Link>
                        <Link className='link_categoria' to="/categoria/Bisagras">Bisagras</Link>
                        <Link className='link_categoria' to="/categoria/Rodamientos">Rodamientos</Link>
                        <Link className='link_categoria' to="/categoria/KitsLaterales">Kits Laterales</Link>
                        <Link className='link_categoria' to="/categoria/KitsBipunto">Kits BiPunto</Link>
                        <Link className='link_categoria' to="/categoria/Accesorios A30">Accs. A30</Link>
                        <Link className='link_categoria' to="/categoria/Accesorios Modena">Accs. Modena</Link>
                    </NavDropdown>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


//        EXPORTACIÓN
export default NavBar