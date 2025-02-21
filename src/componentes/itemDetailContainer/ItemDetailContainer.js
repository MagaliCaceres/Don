//        IMPORTACIONES

// Modulos
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../servicios/firebase"

// Estilos
import './ItemDetailContainer.css'

// Componentes
import ItemDetail from '../itemDetail/ItemDetail'

import Cargando from '../cargando/Cargando';

// Core


//        LOGICA

// Función constructora
const ItemDetailContainer = () =>{

    const {productoId} = useParams()

    const [item, setItem] = useState({});

    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"ListaDeProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setItem(newDoc);
        }
        getProducto();
    },[productoId])


      // cargando...
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
        setCargando(false);
        }, 1000);
    }, []);
    
    return(
        <div className='contenedor'>
            {cargando ? (
            <   Cargando/>
            ) : (
                <div>
                    <div className='contenedor_detalle'>
                        <ItemDetail item={item}/>
                    </div>
                </div>
            )}
        </div>
    )
}


//        EXPORTACIÓN
export default ItemDetailContainer