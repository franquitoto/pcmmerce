import React, {useContext} from 'react';
import { ItemContext } from '../../Context';
import Carrousel from '../../componentes/Carrousel/Carrousel';
import ProductCard from '../../componentes/ProductCard/ProductCard';
import './Inicio.css';
// CommonJS

let arrayFiltrado;

const Inicio = () => {
  const [items, setItems] = useContext(ItemContext);

  arrayFiltrado = items.filter(e => e.inicio === true);
  return (
    <div>
      <Carrousel></Carrousel>
        <div className='container1'>
        {arrayFiltrado.map((items)=>{
            return<ProductCard data={items} key={items.id} ruta='inicio' ></ProductCard>
        })}
        </div>
    </div>
  )
}

export default Inicio;