import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ItemContext } from '../../Context';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ProductCard from '../../componentes/ProductCard/ProductCard';

const ItemDetail = () => {
  const [productData , setProducData] = useState([])
  console.log(productData)
  

  let id = useParams()
  let productId = id.id
  useEffect(() =>{
    const getProduct = async () =>{
        const q = query(collection(db, 'productos'), where(documentId(),"==", productId));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: parseInt(doc.id)});
            
        });
        setProducData(docs)
    }
    getProduct();
}, []);
  return (
    <div className='container'>{productData.map((data) =>{
        return<ProductCard data={data} key={data.id} ruta="detail"></ProductCard>
    })}</div>
  )
}

export default ItemDetail