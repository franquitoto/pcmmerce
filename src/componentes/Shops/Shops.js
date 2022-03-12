import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { ItemContext } from '../../Context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './Shops.css'
const initialState = {
    name: '',
    lastName: '',
    city: '',
};

const Shops = () => {
    const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra] = useContext(ItemContext);
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurcheseID] = useState('')

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
        console.log(values)

    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const docRef = await addDoc(collection(db, "purchase"), {
            values
        });
        console.log("hola")
        console.log(docRef.id);
        setPurcheseID(docRef.id)
        setValues(initialState)
        console.log(values)

    }
    return (
        <Card sx={{ minWidth: 345 }} className='card formContainer'>
            <Typography gutterBottom variant="h5" component="div">
                Datos del comprador
            </Typography>
            <Box className='formContainer' onSubmit={onSubmit}>
                <Typography variant="body2" color="text.secondary">
                    Nombre
                </Typography>
                <TextField

                    id="outlined-basic" label="name" variant="outlined"
                    placeholder='name'
                    name="name"
                    value={values.name}
                    onChange={onChange}
                >
                </TextField >
                <Typography variant="body2" color="text.secondary">
                        Apellido
                </Typography>
                <TextField
                    id="outlined-basic" label="lastName" variant="outlined"
                    placeholder='lastName'
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                >
                </TextField >
                <Typography variant="body2" color="text.secondary">
                        Ciudad
                </Typography>
                <TextField

                    id="outlined-basic" label="city" variant="outlined"
                    placeholder='city'
                    name="city"
                    value={values.city}
                    onChange={onChange}
                >

                </TextField >
                <Button onClick={() =>{
                    onSubmit()
                    finalizarCompra(purchaseID)
                    }} type="button">enviar</Button>
                

            </Box>
        </Card>
    )
}

export default Shops;