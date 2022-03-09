import './App.css';
// React
import React, {useContext} from 'react';
// REAC ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// PROVIDERR 
import {Context, ItemsProvider} from './Context'
import ProductList from './componentes/ProductList/ProductList';


const App = () => {
  
  
  return (
    <ItemsProvider>
      <ProductList></ProductList>
    </ItemsProvider>
  );
}

export default App;
