import React from 'react'
import './footer.css'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Mititel</a>
      <ul className="permalinks">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#hobbies'>Hobbies</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.instagram.com/new.nikolai/' target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href='https://github.com/MititelNikolai' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://twitter.com/mititeln' target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Mititel Nikolai. 2022.</small>
      </div>
    </footer>
  )
}

export default Footer