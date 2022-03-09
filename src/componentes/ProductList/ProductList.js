import React, {useContext} from 'react';

// ContextT
import { ItemContext } from '../../Context';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'


const ProductList = () => {
    const [items, setItems] = useContext(ItemContext);
  return (
    <div className='container'>
        {items.map((items)=>{
            return<ProductCard data={items} key={items.id} ></ProductCard>
        })}
    </div>
  )
}

export default ProductList