import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})
  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json;charset=utf-8'
      },
      body: JSON.stringify(formDetails)
    })
    setButtonText('Send')
    let result = response.json()
    setFormDetails(formInitialDetails)
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' })
    } else {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again.'
      })
    }
  }

  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="pb-4">
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2> Get In Touch </h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="">
                  <input
                    type="text"
                    value={formDetails.name}
                    placeholder="Name"
                    onChange={e => onFormUpdate('name', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={e => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={e => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <div className="submit-box">
                    <button type="submit" className="button-submit">
                      <span>{buttonText}</span>
                    </button>
                  </div>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
