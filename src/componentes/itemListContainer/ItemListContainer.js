//        IMPORTACIONES

// Modulos
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../servicios/firebase";


// Estilos
import './ItemListContainer.css'

// Componentes
import ItemList from '../itemList/ItemList'

import Cargando from '../cargando/Cargando';

// Core


//        LOGICA

// Función constructora
const ItemListContainer = () =>{

    const { categoriaId } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const queryRef = categoriaId
                ? query(
                    collection(db, "ListaDeProductos"),
                    where("categoria", "==", categoriaId)
                )
                : collection(db, "ListaDeProductos");

            // hacer la consulta
            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map((doc) => {
                const newDoc = {
                    id: doc.id,
                    ...doc.data(),
                };
                return newDoc;
            });
            setProductos(docsInfo);
        };
        getData();
    }, [categoriaId]);

     // cargando...
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
        setCargando(false);
        }, 1000);
    }, []);
        
    
    return(
        <div className='contenedor' >
            {cargando ? (
            <   Cargando/>
            ) : (
                <div>
                    <div className='contenedor_productos'>
                    <ItemList item={productos}/>

                    </div>
                </div>
        )}
        </div>


    )
}


//        EXPORTACIÓN
export default ItemListContainer