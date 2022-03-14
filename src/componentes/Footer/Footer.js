import React, { useContext, useState } from 'react';
import { ItemContext } from '../../Context';
import bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter] = useContext(ItemContext);
    return (
        <div>
            <footer className="footer bg-perzonalizado">
                <div className="container-fluid py-2">
                    <div className="row">
                        <article className=" footer__article col-lg-12 col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className='breadcrumb-item'><Link className='footerLink' to="/">Inicio</Link></li>
                                    <li className='breadcrumb-item'><Link className='footerLink' to="/productos" onClick={() => selecFilter('todos')}>Productos</Link></li>
                                    <li className='breadcrumb-item'><Link className='footerLink' to="/carrito">Carrito</Link></li>
                                </ol>
                            </nav>
                        </article>
                        <article className="col-lg-12 col-md-12">
                            <a href="index.html">
                                <img src="https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/logo2.jpg?alt=media&token=b21dad34-c230-4b9f-9e1a-fd7fe91b7009" alt="Logo" className="py-4 d-block mx-auto"/>
                            </a>
                        </article>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;