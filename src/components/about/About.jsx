import React from 'react'
import { useTranslation } from 'react-i18next'
import ME from '../../assets/me-about.jpg'
import Card from './Card'
import './about.css'
const About = () => {
	const { t } = useTranslation()
	return (
		<section id='about'>
			<h5>{t('subTitleAbout')}</h5>
			<h2>{t('titleAbout')}</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<Card
							cardName='Experience'
							text={t('experience')}
							subText={t('experienceText')}
						/>
						<Card
							cardName='Clients'
							text={t('clients')}
							subText={t('clientsText')}
						/>
						<Card
							cardName='Projects'
							text={t('projects')}
							subText={t('projectsText')}
						/>
					</div>
					<p>{t('description')}</p>
				</div>
			</div>
		</section>
	)
}

export default About
