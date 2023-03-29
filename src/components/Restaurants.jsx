import React from 'react'
import star from "../icons/star.png"
import papaya from "../images/papaya.png"
import berries from "../images/berries.png"
import avacado from "../images/avacado.png"
import orange from "../images/orange.png"

const Restaurants = () => {
  return (
    <section className="restaurants" id="fonditas">
      <div className="container d-flex align-items-center flex-column">
        <p className='section__cat'>Fonditas</p>
        <p className='section__title'>Fondas cercanas</p>
        <p className='section__desc'>‘Estás son las fondas que se encuentran cerca!</p>
        <div className='restaurants__cards'>
          <div className="restaurants__card">
            <span className="restaurants__card-rating">
              <img className="restaurants__card-star" src={star} alt="star" />
              9.8
            </span>
            <img className="restaurants__card-img" src={papaya} alt="papaya" />
            <div className="restaurants__card-info">
              <p className="restaurants__card-title">Doña Laura</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">20-30 min</span>
                <span className="restaurants__card-name">Fonditas</span>
              </div>
            </div>
          </div>
          <div className="restaurants__card">
            <span className="restaurants__card-rating">
              <img className="restaurants__card-star" src={star} alt="star" />
              8.5
            </span>
            <img className="restaurants__card-img" src={berries} alt="berries" />
            <div className="restaurants__card-info">
              <p className="restaurants__card-title">Rosa Cafe</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">~45 min</span>
                <span className="restaurants__card-name">Lonchería</span>
              </div>
            </div>
          </div>
          <div className="restaurants__card">
            <span className="restaurants__card-rating">
              <img className="restaurants__card-star" src={star} alt="star" />
              7.3
            </span>
            <img className="restaurants__card-img" src={avacado} alt="avacado" />
            <div className="restaurants__card-info">
              <p className="restaurants__card-title">Le cottidiene</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">15-20 min</span>
                <span className="restaurants__card-name">Sushi</span>
              </div>
            </div>
          </div>
          <div className="restaurants__card">
            <span className="restaurants__card-rating">
              <img className="restaurants__card-star" src={star} alt="star" />
              8.0
            </span>
            <img className="restaurants__card-img" src={orange} alt="orange" />
            <div className="restaurants__card-info">
              <p className="restaurants__card-title">Querreque</p>
              <div className='restaurants__card-bottom'>
                <span className="restaurants__card-timing">~50 min</span>
                <span className="restaurants__card-name">Veggies</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Restaurants    