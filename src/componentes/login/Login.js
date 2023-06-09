//        IMPORTACIONES

// Modulos
import React, { useState } from 'react'; 
import { useAuth } from '../../contexto/contexto';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



// Estilos
import './Login.css'


// componentes
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//        LOGICA

// Función constructora

const Login = () =>{

    // useState ingreso
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // AUTH
    const {login} = useAuth()

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
            await login(user.email, user.password)
            navigate('/home')

        }catch (error){
            if(error.code === "auth/user-not-found"){
                setError('¡Usuario Inexistente!')
            }else if(error.code === "auth/wrong-password"){
                setError("¡Contraseña Incorrecta!")
            }
        }
    }
    
    return(
        <div >
            <div className='formulario'>
                <Form onSubmit={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label'>Email</Form.Label>
                        <Form.Control className='input'
                        type="email" 
                        name='email'
                        placeholder="example@gmail.com" 
                        autoComplete='on'
                        onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label'>Contraseña</Form.Label>
                        <Form.Control className='input'
                        type="password" 
                        name='password'
                        placeholder="xxxxxxxxxx" 
                        autoComplete='off'
                        onChange={handleChange}/>
                    </Form.Group>
                    {error && <p className='error'>{error}</p>}

                    <Button className='inicio' variant="success" type="submit">Iniciar Sesión</Button>
                    {/* <Link to="/registro" className='cuenta_nueva'>Crear Cuenta</Link> */}
                </Form>
            </div>
        </div>
    )
}


//        EXPORTACIÓN
export default Login

