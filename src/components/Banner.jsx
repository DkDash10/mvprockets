import React from 'react'
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'
import insta from '../icons/instagram.png'
import dot1 from '../shapes/dot1.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'

const Banner = () => {

  const title = "La comida que \n ya conoces \n al mejor precio"

  return (
    <div className="banner">
      <div className="container d-flex">
        <div className="banner__left">
          <p className="banner__left-fav">De tu fonda favorita</p>
          <p className="banner__left-title">{title}</p>
          <form action='' className="banner__left-subscribe">
            <input type="text" placeholder="Busca tu platillo favorito" className="banner__left-input"/>
            <button className="banner__left-button">Buscar</button>
          </form>
          <div className='banner__left-socialIcons'>
            <a href="https://www.facebook.com/profile.php?id=100064095549346" target="_blank" rel="noreferrer" className='banner__left-socialIcon'><img src={facebook} alt="facebook" className='banner__left-facebooklogo'/></a>
            <a href="https://twitter.com/mvprockets" target="_blank" rel="noreferrer" className='banner__left-socialIcon'><img src={twitter} alt="twitter" className='banner__left-twitterlogo'/></a>
            <a href="https://instagram.com" target="_blank"rel="noreferrer"  className='banner__left-socialIcon'><img src={insta} alt="insta" className='banner__left-instalogo'/></a>
          </div>
        </div>
        <div className="banner__right">
          <div className="banner__right-pattern">
            <img className="banner__right-dotPattern1" src={dot1} alt="dot1" />
            <img className="banner__right-dotPattern2" src={dot1} alt="dot1" />
          </div>
          <img className="banner__right-foodImages1" src={food1} alt="food1" />
          <img className="banner__right-foodImages2" src={food2} alt="food2" />
          <img className="banner__right-foodImages3" src={food3} alt="food3" />
        </div>
      </div>
    </div>
  )
}

export default Banner