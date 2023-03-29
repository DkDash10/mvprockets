import React from 'react'
import pizza from "../icons/pizza.png"
import sushi from "../icons/sushi.png"
import hamburguesas from "../icons/hamburger.png"
import veggie from "../icons/watermelon.png"
import sopas from "../icons/noodle.png"
import postres from "../icons/cake.png"

const Categories = () => {
  return (
    <section className="category" id="nosotros">
      <div className="container d-flex align-items-center flex-column">
        <p className='section__cat'>Categorías</p>
        <p className='section__title'>Las favoritas</p>
        <div className="category__cards">
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={pizza} alt="pizza" />
              <span className="category__card-rating">42</span>
            </div>
            <p className="category__card-title">Pizza</p>
            <p className="category__card-prize">Desde $60</p>
          </div>
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={sushi} alt="sushi" />
              <span className="category__card-rating">35</span>
            </div>
            <p className="category__card-title">Sushi</p>
            <p className="category__card-prize">Desde $50</p>
          </div>
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={hamburguesas} alt="hamburguesas" />
              <span className="category__card-rating">28</span>
            </div>
            <p className="category__card-title">Hamburguesas</p>
            <p className="category__card-prize">Desde $50</p>
          </div>
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={veggie} alt="veggie" />
              <span className="category__card-rating">23</span>
            </div>
            <p className="category__card-title">Veggie</p>
            <p className="category__card-prize">Desde $50</p>
          </div>
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={sopas} alt="sopas" />
              <span className="category__card-rating">15</span>
            </div>
            <p className="category__card-title">Sopas</p>
            <p className="category__card-prize">Desde $50</p>
          </div>
          <div className="category__card">
            <div className="category__card-bg">
              <img className="category__card-icon" src={postres} alt="postres" />
              <span className="category__card-rating">9</span>
            </div>
            <p className="category__card-title">Postres</p>
            <p className="category__card-prize">Desde $50</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories