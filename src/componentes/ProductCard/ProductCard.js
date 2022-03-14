import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProductCard.css'
import { ItemContext } from '../../Context';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
//
const ProductCard = ({ data, ruta }) => {
    const [countL, setCountL] = useState(0);
    const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter] = useContext(ItemContext);
    const [clasImg, setClasImg] = useState("img imgM");
    const [isLoading, setIsloading] = useState(true);
    let auxStock = data.stock
    setTimeout(() => {
        setIsloading(false)
        setClasImg("img");
    }, 2000);
    return (
        <Card sx={{ maxWidth: 345 }} className='card'>
            {ruta === 'inicio' ?
                <Link className='link1' to="productos" onClick={() => selecFilter(data.categoria)}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='cat'>
                    {data.categoria.toUpperCase()}
                </Typography>
                </CardContent>
                </Link>
                :null
            }
            <Link to={`/detail/${data.id}`} className="link1">
                {isLoading ? <CircularProgress disableShrink className='isLoading' /> : null}
                <CardMedia
                    component="img"
                    image={data.img}
                    alt={data.nombre}
                    className={clasImg}
                />
                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.resumen}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        stock: {data.stock}
                    </Typography>
                    {ruta === 'detail' ?
                        <Typography variant="body2" color="text.secondary">
                            <h3>Descripción</h3>
                            {data.descripcion}
                        </Typography> :
                        console.log("no descripcion")
                    }
                </CardContent>
            </Link>
            {ruta === 'carrito' ?
                <div >
                    <div className='flex'>
                        <Typography variant="body2" color="text.secondary">
                            <span class="badge rounded-pill bg-info text-white" id='span'>cantidad: {data.seleccion}</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span class="badge rounded-pill bg-success text-white" id='span'>total  ${data.precio * data.seleccion}</span>
                        </Typography>
                    </div>
                    <div className='flex'>
                        <Button onClick={() => removCarrito(data)}>Quitar del carrito</Button>
                    </div>

                </div> :
                <CardActions>
                    <Button className='addSeleccion' onClick={() => {
                        if (countL > 1) {
                            let aux = countL
                            aux -= 1
                            setCountL(aux)
                        }
                    }}>-</Button>
                    <Typography variant="body2" color="text.secondary">
                        {countL}
                    </Typography>
                    <Button className='addSeleccion' onClick={() => {
                        if (countL <= 9) {
                            if (data.stock === 0) {
                                alert("No hay stock de este producto")
                            } else {
                                let aux = countL
                                aux += 1
                                setCountL(aux)

                            }

                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oooops',
                                text: `no hay stock para la cantidad que desea`,
                                timer: 3000,
                                toast: true,
                                position: 'top'
                            })
                        }
                    }}>+</Button>
                    <Button onClick={() => {
                        if (countL != 0) {
                            if (data.stock === 0) {
                                alert("No hay stock para la cantidad que desea")
                            } else {
                                setCountL(0)
                                addCarrito(data, countL)
                            }
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oooops',
                                text: `no se puede agregar menos de 1 articulo al carrito`,
                                timer: 3000,
                                toast: true,
                                position: 'top'
                            })
                        }
                    }}>Agregar al carrito</Button>
                </CardActions>
            }
        </Card>

    )
}

export default ProductCard;