import React, {useContext, useState} from 'react';
import { ItemContext } from '../../Context';
import ProductCard from '../../componentes/ProductCard/ProductCard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Shops from '../../componentes/Shops/Shops';
import { async } from '@firebase/util';
const Carrito = () => {
  
  
  const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra] = useContext(ItemContext);
  let aux = carrito.length
  const [bolean, setBolean] = useState('')

  const click = async () =>{
    let aux = 'existe'
    setBolean(aux)
  }
  return (
    aux === 0 ?
    <p>carrito vacio</p>:
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