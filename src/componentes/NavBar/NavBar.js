import React, {useContext, useState} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../Context';

const NavBar = () => {
  const [items, setItems, carrito, addCarrito, count, removCarrito, finalizarCompra, filter, setFilter, selecFilter] = useContext(ItemContext);
  const [clasesHarcodeada, setClasesHarcodeada] = useState("menu");
  const [clasesHarcodeada2, setClasesHarcodeada2] =useState("subMenu ocultarSubMenu");
  
  const cambiarClase = ()  => {
    if(clasesHarcodeada === "menu"){
      setClasesHarcodeada("menu mostrar")
    }else{
      setClasesHarcodeada("menu")
    }
    
  }
  const cambiarClase2 = ()  => {
    if(clasesHarcodeada2 === "subMenu ocultarSubMenu"){
      setClasesHarcodeada2("subMenu mostrarSubMenu")
      console.log(clasesHarcodeada2)
    }else{
      setClasesHarcodeada2("subMenu ocultarSubMenu")
      console.log(clasesHarcodeada2)
    }
    
  }
  
  return (
    <>
    <div className='dflex'>
      <span className='nav-bar span' id='btnMenu' onClick={cambiarClase}>
        <i class="fa-solid fa-bars "></i>Menu
        <Link to='/' id='logoR'><img className='logo'  src='https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/logo2.jpg?alt=media&token=b21dad34-c230-4b9f-9e1a-fd7fe91b7009'>
        </img></Link>
      </span>
      
    </div>
    
    <nav className='main-nav'>
      
        <ul className={clasesHarcodeada} id='menu'>
            <li className='menuItem'><Link className='menuLink' to="/">Inicio</Link></li>
            <li onClick={cambiarClase2} className='menuItem containerSubMenu'>
            <Link  className='menuLink submenuBtn' to="#" >Productos<i class="fa-solid fa-chevron-down"></i></Link>
              <ul className={clasesHarcodeada2}>
                <li className='menuItem' onClick={() => selecFilter('todos')}><Link to="/productos" className='menuLink'>Todos</Link></li>
                <li className='menuItem' onClick={() => selecFilter('monitores')}><Link to="/productos" className='menuLink'>Monitores</Link></li>
                <li className='menuItem' onClick={() => selecFilter('mouse')}><Link to="/productos" className='menuLink'>Mouse</Link></li>
                <li className='menuItem' onClick={() => selecFilter('teclados')}><Link to="/productos" className='menuLink'>Teclados</Link></li>
                <li className='menuItem' onClick={() => selecFilter('auriculares')}><Link to="/productos" className='menuLink'>Auriculares</Link></li>
              </ul>
              </li>
            <li className='menuItem'><Link className='menuLink' to="carrito">Carrito: {carrito.length}</Link></li>
            <li className='liLogo'><Link to='/'><img className='logo' src='https://firebasestorage.googleapis.com/v0/b/pcmerce-a1d70.appspot.com/o/logo2.jpg?alt=media&token=b21dad34-c230-4b9f-9e1a-fd7fe91b7009'></img></Link></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar;