import React from 'react'
import design from '../shapes/pattern.png'
import circle from '../shapes/circle2.png'
import woman from '../images/woman.png'
import coffee from '../images/coffee.png'

const Chef = () => {

  const title = "Sube tu fonda \n a fonditas duplica \n tus ingresos"

  return (
    <section className="chef" id="inscribírse">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="chef__design" src={design} alt="design" />
            <img className="chef__woman" src={woman} alt="woman" />
            <img className="chef__coffee" src={coffee} alt="coffee" />
          </div>
          <div className="col-md-6">
            <img className="chef__circle" src={circle} alt="circle" />
            <div className="chef__info">
              <p className='chef__cat'>Fondas</p>
              <p className='section__title'>{title} </p>
              <p className='map__desc'>Inscríbete a nuestra plataforma y comienza a generar en estos momentos de crísis</p>
              <button className='map__form-button'>Subir mi fonda</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chef