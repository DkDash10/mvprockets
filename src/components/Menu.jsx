import React from 'react'
import star from '../icons/star.png'
import menu1 from '../images/menu1.png'
import menu2 from '../images/menu2.png'
import menu3 from '../images/menu3.png'
import menu4 from '../images/menu4.png'
import menu5 from '../images/menu5.png'
import menu6 from '../images/menu6.png'

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <p className='section__cat'>Fonditas</p>
        <p className='section__title'>Los mejores menús</p>
        <div className="menu_desc">
          <p className='menu__left'>Aquí están los mejores menús de la semana, y decide que vas a pedir </p>
          <p className='menu__right'>Ver todos</p>
        </div>
        <div className="menu__cards">
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu1} alt="menu1" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Hot cakes</p>
              <p className="menu__card-esp">Hot caketerías</p>
              <p className="menu__card-desc">Incluye dos toppics</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">15-20 min</span>
                <span className="restaurants__card-name">Desde $70</span>
              </div>
            </div>
          </div>
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu2} alt="menu2" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Pizza</p>
              <p className="menu__card-esp">Pizzería</p>
              <p className="menu__card-desc">Chingo de pzzas</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">~45 min</span>
                <span className="restaurants__card-name">Desde $70</span>
              </div>
            </div>
          </div>
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu3} alt="menu3" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Continental</p>
              <p className="menu__card-esp">Desayunos</p>
              <p className="menu__card-desc">Incluye huevo y tostadas</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">15-20 min</span>
                <span className="restaurants__card-name">Desde $50</span>
              </div>
            </div>
          </div>
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu4} alt="menu4" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Sushi</p>
              <p className="menu__card-esp">Ensaladish</p>
              <p className="menu__card-desc">Muchas frutas</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">30-40 min</span>
                <span className="restaurants__card-name">Desde $70</span>
              </div>
            </div>
          </div>
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu5} alt="menu5" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Hot cakes</p>
              <p className="menu__card-esp">Otros desayunos</p>
              <p className="menu__card-desc">Incluye dos jugos y tocinito</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">~20 min</span>
                <span className="restaurants__card-name">Desde $50</span>
              </div>
            </div>
          </div>
          <div className="menu__card">
            <div className="menu__card-left">
              <span className="restaurants__card-rating">
                <img className="restaurants__card-star" src={star} alt="star" />
                9.8
              </span>
              <img src={menu6} alt="menu6" />
            </div>
            <div className="menu__card-right">
              <p className="menu__card-eng">Pizza</p>
              <p className="menu__card-esp">Pastish</p>
              <p className="menu__card-desc">Una súper duper pasta</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">10-20 min</span>
                <span className="restaurants__card-name">Desde $50</span>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </section>
  )
}

export default Menu