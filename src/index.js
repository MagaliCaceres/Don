
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//componentes
// import CartProvider from './contexto/contexto'

// import NavBar from './componentes/navBar/NavBar'
// import Home from './componentes/home/Home'
// import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
// import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
// import Footer from './componentes/footer/Footer'


import reportWebVitals from './reportWebVitals';
import App from './App';


// ---------------------------


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
    {/* <CartProvider>

      <BrowserRouter>

      <NavBar/>

      <Routes>

          <Route exact path='/' element={<Home/>} />

          <Route exact path='/productos' element={<ItemListContainer/>} />

          <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>

          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/> 

      </Routes>

      <Footer/>

      </BrowserRouter>

    </CartProvider> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
