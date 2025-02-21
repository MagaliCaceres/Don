//        IMPORTACIONES

// Modulos
import React, { useState } from 'react'; 
import { useAuth } from '../../contexto/contexto';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




// Estilos
import './Register.css'

// componentes
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//        LOGICA

// Función constructora

const Register = () =>{

    // useState ingreso
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // AUTH
    const {signup} = useAuth()

    // NAVIGATE
    const navigate = useNavigate()
    const [error, setError] = useState()
    

    // HANDLE CHANGE
    const handleChange = ({target:{name, value}}) =>{
        setUser({...user, [name]:value});
    }

    // ENVIAR
    const handleSumbit =  async (e) =>{
        e.preventDefault() 
        setError('');
        try{
            await signup(user.email, user.password)
            navigate('/home')

        }catch (error){
            if(error.code === "auth/internal-error"){
                setError('Correo Invalido.')
            }else if( error.code === "auth/weak-password"){
                setError('Ingrese hasta 6 o más caracteres.')
            }else if(error.code === "auth/email-already-in-use"){
                setError('El correo ya esta en uso.')
            }
        }
    }
    
    return(
        <div className='formulario'>

            <Form onSubmit={handleSumbit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label'>Email</Form.Label>
                    <Form.Control className='input'
                    type="email" 
                    name='email'
                    id='email'
                    placeholder="example@gmail.com" 
                    autoComplete='off'
                    onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label'>Contraseña</Form.Label>
                    <Form.Control className='input'
                    id='password'
                    type="password" 
                    name='password'
                    placeholder="xxxxxxxxxx" 
                    autoComplete='off'
                    onChange={handleChange}/>
                </Form.Group>
                {error && <p className='error'>{error}</p>}

                <Button className='inicio' variant="success" type="submit">Crear Cuenta</Button>
                <Link to="/" className='cuenta_nueva'>Iniciar Sesión</Link>
            </Form>
        </div>
    )
}


//        EXPORTACIÓN
export default Register

