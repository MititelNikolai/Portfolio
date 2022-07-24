import React from 'react'
import ME from '../../assets/me-about.jpg'
import Card from './Card'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <Card text='Experience' subText='1+ Years Working' />
            <Card text='Clients' subText='2+ Worldwide' />
            <Card text='Projects' subText='3 Completed' />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo delectus consectetur quam quibusdam sit optio nam vero ullam labore doloremque perspiciatis voluptatem molestias rerum aperiam, tempora expedita natus veniam?</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About