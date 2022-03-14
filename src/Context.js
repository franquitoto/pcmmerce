
import React, { createContext, useState, useEffect } from 'react';
// FIREBASE - FIRESTON
import {db} from './firebase/firebaseConfig';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import Swal from 'sweetalert2';
let changedCart;
let auxChangedCart;
let changedItem;
let auxChangedItem;
const initialCart = []

export const ItemContext = createContext();
export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    const [filter, setFilter] = useState('')
    
    
    useEffect(() =>{
        const getProducts = async () =>{
            const q = query(collection(db, 'productos'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {

                docs.push({...doc.data(), id: parseInt(doc.id)});
                
            });
            setItems(docs)
        }
        getProducts();
    }, []);
    const [carrito, setCarrito] = useState(initialCart);

    // Funciones del contexto

    // Agregar productos al carrito
    
    const addCarritoSoloUno = (data, cant) =>{
        Swal.fire({
            icon: 'success',
            title: data.nombre,
            text: `se agregaron ${cant} al carrito`,
            footer: 'agregando...',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            position: 'top-end'
          })     
        data.stock-=cant
        changedCart = [
            ...carrito,
            data,
        ]
        auxChangedCart = changedCart
        setCarrito(changedCart)
    }
    const addCarritoMasDeuno = (data, cant) =>{
        Swal.fire({
            icon: 'success',
            title: data.nombre,
            text: `se agregaron ${cant} al carrito`,
            footer: 'agregando...',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            position: 'top-end'
          })     
        let aux = 0;
            auxChangedCart.forEach(e => {
                if(e.id == data.id){
                    e.seleccion+=cant
                    e.stock-=cant;
                    aux = 1
                }
            });
            if(aux === 0){
                addCarritoSoloUno(data, cant)
            }else{
                setCarrito(auxChangedCart)
            }
    }
    const addCarrito = (data, cant,e) => {
        if (carrito.length === 0) {
            addCarritoSoloUno(data, cant)
        }else{
            addCarritoMasDeuno(data, cant)
        }
    }
    // Quitar productos del carrito
    const removCarrito = (data) =>{
        changedCart = carrito
        changedCart = changedCart.filter(e => e.id != data.id)
        removeAlert(data)
        setCarrito(changedCart)
        
    }
    const removeAlert = (data) =>{
        let name = data.nombre
        Swal.fire({
            icon: 'error',
            title: name,
            text: 'se eliminara del carrito',
            footer: 'eliminando...',
            timer: 3000,
            timerProgressBar: true
          })      
    }
    const finalizarCompra = (data) =>{
          setCarrito(initialCart)   
          Swal.fire({
            icon: 'success',
            title: 'a finalizado la compra',
            text: `el codigo de su compra es ${data}`,
            footer: 'finalizando...',
            timerProgressBar: true,
            position: 'center'
          });
    };
    const selecFilter = (data) =>{
        
        let aux = data
        setFilter(aux)
    }
    return (
        <ItemContext.Provider value={[items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter]}>
            {children}
        </ItemContext.Provider>
    );
}

