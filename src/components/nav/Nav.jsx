import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const [activNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav