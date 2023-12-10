import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
            Nuestra <span>Características</span>
            </h1>
            <p>Nos enorgullece conectar a viajeros con anfitriones locales, brindando la oportunidad de sumergirse en la vida cotidiana de cada destino. </p>
            <p>Experimenta la autenticidad y la hospitalidad de las comunidades locales mientras te alojas en hogares únicos.</p>
            <button className='secondary-btn'>
            Explora más <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
