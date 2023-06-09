//        IMPORTACIONES

import { useAuth } from "../contexto/contexto"
import { Navigate } from "react-router-dom"

import Spinner from 'react-bootstrap/Spinner';



//        LOGICA

// Función constructora
const ProtectedRoute = ({children}) =>{
    
    const {user, loading} = useAuth()

    if(loading) return 
        <div>
            <div className='cargando'>
                <Spinner className='icon_cargando' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </div>

    if(!user) return <Navigate to="/"/>

    return <>{children}</>
}


//        EXPORTACIÓN
export default ProtectedRoute