import React, {useContext, useState} from 'react';
import { ItemContext } from '../../Context';
import ProductCard from '../../componentes/ProductCard/ProductCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Shops from '../../componentes/Shops/Shops';
import { async } from '@firebase/util';
import './Carrito.css';
const Carrito = () => {
  
  
  const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter] = useContext(ItemContext);
  let aux = carrito.length
  const [bolean, setBolean] = useState('')

  const click = async () =>{
    let aux = 'existe'
    setBolean(aux)
  }
  return (
    aux === 0 ?
    <>
      <div className='carritoVacio'>
        <div className='hijo'>
          <h3>El carrito se encuentra vacio</h3>
          <img alt='carritoVacio' src='https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/306793.png?alt=media&token=1d2dfe18-9245-4782-bf13-ce7e0dbfbe7f'></img>
          <h4>por favor vaya a ver nuestros <Link to='/productos' onClick={() => selecFilter('todos')}>productos</Link> para poder comprar</h4>
        </div>
      </div>
    </>:
    <div className='container'>
      {carrito.map((items)=>{
            return(
            <ProductCard data={items} key={items.id} ruta='carrito'></ProductCard>
            )
        })}
        <div className='container'>
          <Button onClick={click}>finalizar</Button><br></br>
         </div>
         {bolean && <Shops></Shops>}
         
         
    </div>
  )
};

export default Carrito;