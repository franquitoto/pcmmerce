import React, {useContext} from 'react';

// Contextttt
import { ItemContext } from '../../Context';
import ProductCard from '../../componentes/ProductCard/ProductCard';
import './Productos.css';
let arrayFiltrado;

const Productos = () => {
  const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter] = useContext(ItemContext);
  filter == 'todos'? arrayFiltrado = items:arrayFiltrado = items.filter(e => e.categoria == filter);
  
  
  return (
    <div className='container1'>
      {arrayFiltrado.map((items)=>{
            return(
              <ProductCard data={items} key={items.id} ruta='productList' ></ProductCard>
            )
        })}
    </div>
  )
}

export default Productos;