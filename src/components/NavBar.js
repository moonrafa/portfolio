import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/DEV.svg'
import linkedinIcon from '../assets/img/linkedin-square.svg'
import githubIcon from '../assets/img/github-alt.svg'
import twitterIcon from '../assets/img/twitter.svg'
import lastfmIcon from '../assets/img/lastfm-square.svg'
import discordIcon from '../assets/img/discordIcon.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                aria-label="Linkedin"
                href="https://linkedin.com/in/moonrafa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="" />
              </a>
              <a
                aria-label="Github"
                href="https://github.com/moonrafa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="" />
              </a>
              <a
                aria-label="Discord"
                href="https://discord.com/users/770899536318169109"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discordIcon} alt="" />
              </a>
              {/* <a
                href="https://twitter.com/kiramekinara"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="" />
              </a>
              <a
                href="https://www.last.fm/user/asoftuniverse"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lastfmIcon} alt="" />
              </a> */}
            </div>

            <a href="#contact">
              <button className="vvd">
                <span>Contact me</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
