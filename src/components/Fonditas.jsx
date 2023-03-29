import React from 'react'
import dot2 from "../shapes/dot2.png"
import iphone from "../images/iphone.png"

const Fonditas = () => {

  const title = "Es tiempo de \n ayudarnos, \n Te unes?"
  return (
    <section className="fonditas" id="subir">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='fonditas__title'>{title}</p>
          </div>
          <div className="col-md-6">
            <img className='fonditas__pattern1' src={dot2} alt="dot2" />
            <div className="fonditas__phone">
              <img className='fonditas__phone-img' src={iphone} alt="iphone" /> 
            </div>
            <img className='fonditas__pattern2' src={dot2} alt="dot2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fonditas