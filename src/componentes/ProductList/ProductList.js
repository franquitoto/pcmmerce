import React, {useContext} from 'react';

// Contextttt
import { ItemContext } from '../../Context';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [items, setItems] = useContext(ItemContext);
  return (
    <div className='container'>
        {items.map((items)=>{
            return<ProductCard data={items} key={items.id} ruta='productList' ></ProductCard>
        })}
    </div>
  )
}

export default ProductList;