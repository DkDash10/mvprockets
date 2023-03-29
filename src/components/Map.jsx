import React from 'react'
import man from "../images/man.png"
import square from "../shapes/square.png"
import circle from "../shapes/circle.png"
import map from "../images/map.png"
import pin from "../icons/map.png"

const Map = () => {

  const title = "Encuentra en \n el mapa las mejores \n fondas"

  return (
    <section className="map" id="mapa">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className='map__square' src={square} alt="square" />
            <img className='map__man' src={man} alt="man" />
            <img className='map__mapImage' src={map} alt="map" />
          </div>
          <div className="col-md-6">
            <img className='map__circle' src={circle} alt="circle" />
            <div className="map__info">
              <p className='map__cat'>Mapa</p>
              <p className='map__title'>{title}</p>
              <p className='map__desc'>Encuentra las fondas cercanas por sí quieres hacer pick up directo en las tiendas. </p>
              <form action='/' className='map__form'>
                <input className='map__form-input' placeholder='Tu código postal' type="text" />
                <img className='map__form-pin' src={pin} alt="pin" />
                <button type="submit" className='map__form-button'>Buscar en mapa</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Map