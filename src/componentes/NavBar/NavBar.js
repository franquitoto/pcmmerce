import React, {useContext} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../Context';

const NavBar = () => {
  const [items, setItems, carrito, addCarrito] = useContext(ItemContext);
  return (
    <nav className='nav'>
        <ul className='ul'>
            <Link to="/" className='link'>Inicio</Link>
            <Link to="/productos" className='link'>Productos</Link>
            <Link to="carrito" className='link'>Carrito: {carrito.length}</Link>
        </ul>
    </nav>
  )
}

export default NavBar;