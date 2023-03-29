import React from 'react'
import cart from "../icons/cart.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar__logo">Fonditas</a>
        <div className='navbar__section'>
          <a href="#nosotros" className='navbar__section-link'>Nosotros</a>
          <a href="#fonditas" className='navbar__section-link'>Fonditas</a>
          <a href="#mapa" className='navbar__section-link'>Mapa</a>
          <a href="#inscribírse" className='navbar__section-link'>Inscribírse</a>  
        </div>
        <div className="navbar__buttons">
          <button type="button" className='navbar__buttons-login'>Inicia sesión</button>
          <button type='button' className='navbar__buttons-cart'><img src={cart} alt="cart" className='navbar__buttons-cartlogo' /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
