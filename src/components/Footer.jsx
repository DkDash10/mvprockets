import React from 'react'
import plane from "../icons/plane.png"

const Footer = () => {

  const title = "Te apasiona ayudar \n a tu comunidad?"
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className='footer__top-title'>{title}</p>
          <a href="#menu" className='footer__top-links'>Menu</a>
          <label htmlFor='subscribe' className='footer__top-label'>Suscríbete</label>
        </div>
        <div className="footer__center">
          <a href='/' className='footer__middle-title'>Fonditas</a>
          <div className='footer__middle-links'>
            <ul className='footer__middle-list1'>
              <li className='footer__middle-listItem'><a href="#nosotros">Nosotros</a></li>
              <li className='footer__middle-listItem'><a href="#fonditas">Fonditas</a></li>
            </ul>
            <ul className='footer__middle-list3'>
              <li className='footer__middle-listItem'><a href="#mapa">Mapa</a></li>
              <li className='footer__middle-listItem'><a href="#subir">Subir</a></li>
            </ul>
          </div>
          <form action='/' className='footer__middle-form'>
            <input className='footer__middle-input' type="text" placeholder='Tu e-mail' id="subscribe" />
            <button className='footer__middle-button' type='submit'><img src={plane} alt="plane" /></button>
          </form>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className='footer__bottom-terms'>Términos y condiciones</p>
            <p className='footer__bottom-privacy'>Privacidad</p>
          </div>
          <p className='footer__bottom-right'>© 2020 Fonditas</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer