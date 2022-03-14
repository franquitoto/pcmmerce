import './App.css';
// React
import React, { useContext} from 'react';
// REAC ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// PROVIDER 
import {ItemsProvider} from './Context'
import NavBar from './componentes/NavBar/NavBar';
import Inicio from './views/Inicio/Inicio';
import Productos from './views/Productos/Productos';
import Carrito from './views/Carrito/Carrito';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Footer from './componentes/Footer/Footer';

const App = () => {
  
  return (
    <ItemsProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Inicio/>}>Inicio</Route>
          <Route path='/productos' element={<Productos/>}>productos</Route>
          <Route path='/carrito' element={<Carrito/>}>Carrito</Route> 
          <Route path='detail/:id' element={<ItemDetail></ItemDetail>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </ItemsProvider>
  );
}

export default App;
