//        IMPORTACIONES

// Modulos
import { Link } from 'react-router-dom';

// Estilos
import './ItemList.css'

// Componentes
import Item from '../item/Item.js'

// Core


//        LOGICA

// Función constructora
const ItemList = ({item}) =>{
    
    return(
        <div>
                <div>
                    <div className='botones_categorias'>
                        <button><Link to="/productos" className='link_categorias'>Todos</Link></button>
                    </div>

                    <div className='cartas_productos'>
                        {
                            item.map(producto=>(
                                <Item key={producto.id} item={producto}/>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}


//        EXPORTACIÓN
export default ItemList