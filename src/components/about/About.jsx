import React from 'react'
import ME from '../../assets/me-about.jpg'
import Card from './Card'
import './about.css'
const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<Card text='Experience' subText='1+ Years Working' />
						<Card text='Clients' subText='2+ Worldwide' />
						<Card text='Projects' subText='3 Completed' />
					</div>
					<p>
						Hello! My name is Nikolai. I am from the small town of Dubossary,
						which is located in Moldova. I have been programming since the 9th
						grade. The path began with Visual Basic, solved ordinary school
						problems in computer science classes, then began to travel to the
						city Olympiads. Then, in the 11th grade, he began to study Java on
						his own, in which he wrote simple programs at the university to
						solve applied problems in the strength of materials. Then I got
						interested in web development. Started with WordPress, built my
						first ExportCar project and fell in love with web development. Then
						I made a website for my city also on Wordpress. At the same time, I
						began to study more deeply how everything works. Mastered
						HTML/CSS/JavaScript, and then started learning React on a course
						from Bob Ziroll on the Scrimba platform. Now I am looking for a job
						for the position of Junior React Developer, as I am convinced that
						it is faster and more efficient to develop in a team of like-minded
						people while benefiting society
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
