import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email, subject, company, message }
    setAllValue([...allValue, newValue])

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setCompany("")
    setMessage("")
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contacto De</h2>
            <p>Complete el siguiente formulario, nos comunicaremos con usted pronto.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                  primer nombre <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                  Apellido <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                  Número de teléfono <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Asunto</span>
                  <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Tu compañía</span>
                  <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                Escribe tu mensaje <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn'>Aplique ahora</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visita nuestra ubicación</h3>
            <p>Colonia 14 De Diciembre, Sonsonate Department, El Salvador.</p>
            <br />

            <h3>Envíanos un mensaje</h3>
            <span>HotelElSalvador@exampal.com</span>
            <br />
            <span>+503 2420-0000</span>
            <br />

            <div className='icon'>
              <h3>Síganos</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } = cureentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Enviado correctamente</h1>
                <h3>
                primer nombre : <p>{fname}</p>
                </h3>
                <h3>
                Apellido: <p>{lname}</p>
                </h3>
                <h3>
                Número de contacto : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  Asunto : <p>{subject}</p>
                </h3>
                <h3>
                nombre de empresa: <p>{company}</p>
                </h3>
                <h3>
                Tu mensaje : <p>{message}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default ContactFrom
