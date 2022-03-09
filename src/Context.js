
import React, { createContext, useState, useEffect } from 'react';
// FIREBASE - FIRESTONN
import {db} from './firebase/firebaseConfig';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';


export const ItemContext = createContext();
export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

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

    return (
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider>
    );
}

