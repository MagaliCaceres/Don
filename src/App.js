//        IMPORTACIONES

// Modulos
import {Routes, Route} from 'react-router-dom';

// Estilos
import "./App.css"

// Componentes
import NavBar from './componentes/navBar/NavBar'
import Home from './componentes/home/Home'
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import Footer from './componentes/footer/Footer'

import Register from "./componentes/register/Register"
import Login from "./componentes/login/Login"

import CartProvider from './contexto/contexto'
import ProtectedRoute from './componentes/protectedRoute';




function App() {
  return (

    <div>

      <CartProvider>
    
        <NavBar/>

        <Routes>
          
          <Route exact path='/' element={<Login/>}/> 
          <Route exact path='/registro' element={<Register/>}/> 

          <Route exact path='/home' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>

          <Route exact path='/productos' element={
            <ProtectedRoute>
              <ItemListContainer/>
            </ProtectedRoute>
          } />

          <Route exact path='/producto/:productoId' element={
            <ProtectedRoute>
              <ItemDetailContainer/>            
            </ProtectedRoute>
          }/>

          <Route exact path='/categoria/:categoriaId' element={
            <ProtectedRoute>
              <ItemListContainer/>          
            </ProtectedRoute>
          }/> 

        </Routes>

        <Footer/>

      </CartProvider>
    </div>


  );
}

export default App;
