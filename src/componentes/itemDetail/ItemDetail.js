//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from '../../servicios/firebase';


// Estilos
import './ItemDetail.css'

// Componentes
import ItemDetailElements from '../itemDetailElements/ItemDetailElements'


// Core


//        LOGICA

// Función constructora
const ItemDetail = ({item}) =>{

    const {productoId} = useParams()

    // const query = collection(db, `ListaDeProductos/${productoId}/Elementos`)
    // const [docs ] = useCollectionData(query)


    // ZAMAC
    const zamac = collection(db, `ListaDeProductos/${productoId}/Zamac`)
    const [zamacDoc ] = useCollectionData(zamac);

    // NYLON
    const nylon = collection(db, `ListaDeProductos/${productoId}/Nylon`)
    const [nylonDoc ] = useCollectionData(nylon)

    // METAL
    const metal = collection(db, `ListaDeProductos/${productoId}/Metal`)
    const [metalDoc ] = useCollectionData(metal)


    // OTROS
    const otros = collection(db, `ListaDeProductos/${productoId}/Otros`)
    const [otrosDoc ] = useCollectionData(otros)






    return(
        <div className='contenedor'>
            {/* ENCABEZADO (IMAGENES - TEXTO) */}
            <div className='encabezado_detalles'>
                <div>
                    {/* VOLVER ATRAS */}
                    <div className='breadcrumbs'>
                        <Link to="/" className='link_breadcrumbs'>Inicio</Link>
                        <p>/</p>
                        <Link to="/productos" className='link_breadcrumbs'>{item.categoria}</Link>
                        <p>/</p>
                        <p className='activo_breadcrumbs'>{item.nombre}</p>
                    </div>

                    <div className='imagen_encabezado'>
                        <img src={item.img} alt={item.nombre} />
                    </div>
                </div>

                <div className='texto_encabezado'>
                    <h1>{item.nombre}</h1>
                    <br/>
                    <h5>{item.descripcion}</h5>
                    <h6>Modelo: <span> {item.modelo} </span></h6>
                    <h6>Cant. de Elementos: <span> {item.elementoscant} </span></h6>
                    <h6>Colores: <span> {item.colores} </span></h6>
                    <h6>Uso: <span> {item.uso} </span></h6>
                    <h6>Presentación: <span> {item.presentacion} </span></h6>
                </div>
            </div>

            {/* ELEMENTOS */}
            {/* <div className='contenedor_elementos'>
                    {docs?.map( (doc) => (
                        <div key={Math.random()}>
                            <ItemDetailElements key={doc.id} path={doc}/>
                        </div>
                    ))}
            </div> */}

            <h2 className='subcategorias'>Zamak:</h2>
            {/* ZAMAC */}
            <div className='contenedor_elementos'>
                    {zamacDoc?.map( (doc) => (
                        <div key={Math.random()}>
                            <ItemDetailElements key={doc.id} path={doc}/>
                        </div>
                    ))}
            </div>
            

            <h2 className='subcategorias'>Nylon:</h2>
            {/* NYLON*/}
            <div className='contenedor_elementos'>
                    {nylonDoc?.map( (doc) => (
                        <div key={Math.random()}>
                            <ItemDetailElements key={doc.id} path={doc}/>
                        </div>
                    ))}
            </div>

            <h2 className='subcategorias'>Metal y Aluminio:</h2>
            {/* METAL*/}
            <div className='contenedor_elementos'>
                    {metalDoc?.map( (doc) => (
                        <div key={Math.random()}>
                            <ItemDetailElements key={doc.id} path={doc}/>
                        </div>
                    ))}
            </div>

            <h2 className='subcategorias'>Otros:</h2>
            {/* OTROS*/}
            <div className='contenedor_elementos'>
                    {otrosDoc?.map( (doc) => (
                        <div key={Math.random()}>
                            <ItemDetailElements key={doc.id} path={doc}/>
                        </div>
                    ))}
            </div>


        </div>
    )
}


//        EXPORTACIÓN
export default ItemDetail