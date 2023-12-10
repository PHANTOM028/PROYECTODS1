import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>Sobre nosotros</h4>
          <h1>
          Nosotros <span>proporcionar solución</span> para hacer crecer tu negocio
          </h1>
          <p>En H.E.S, creemos que cada viaje es una oportunidad para descubrir y conectar con el mundo que nos rodea.</p>
          <p>Desde nuestros modestos comienzos en 2008, hemos estado comprometidos en ofrecer a las personas experiencias únicas y auténticas que van más allá de lo convencional. Nuestro propósito es simple pero poderoso: inspirar a la comunidad global a sentirse parte de cualquier lugar.</p>
          <button className='secondary-btn'>
          Explora más <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
