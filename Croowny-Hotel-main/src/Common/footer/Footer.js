import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>La pasión que nos impulsa es la satisfacción de nuestros huéspedes. Nos dedicamos a brindar experiencias excepcionales que superen las expectativas. </p>
            <br />
            <p>Desde brindar recomendaciones personalizadas hasta satisfacer solicitudes especiales, nuestro equipo está siempre dispuesto a hacer todo lo posible para garantizar su bienestar.</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p></p>
                <label className='fa fa-calendar-alt'></label>
                <span>11 Dic 2023</span>
              </li>
              <li>
                <p></p>
                <label className='fa fa-calendar-alt'></label>
                <span>11 Dic 2023</span>
              </li>
              <li>
                <p></p>
                <label className='fa fa-calendar-alt'></label>
                <span>11 Dic 2023</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>UNIVERSIDAD DE SONSONATE</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© Universidad De Sonsonate, El Salvador .</p>
      </div>
    </>
  )
}

export default Footer
