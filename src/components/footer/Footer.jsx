import React from 'react'
import { useTranslation } from 'react-i18next'
import './footer.css'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
const Footer = () => {
	const { t } = useTranslation()
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				Mititel
			</a>
			<ul className='permalinks'>
				<li>
					<a href='#home'>{t('footerHome')}</a>
				</li>
				<li>
					<a href='#about'>{t('footerAbout')}</a>
				</li>
				<li>
					<a href='#experience'>{t('footerExperience')}</a>
				</li>
				{/*<li><a href='#services'>Services</a></li>*/}
				<li>
					<a href='#portfolio'>{t('footerPortfolio')}</a>
				</li>
				{/*<li><a href='#hobbies'>Hobbies</a></li>*/}
				<li>
					<a href='#contact'>{t('footerContact')}</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://www.instagram.com/new.nikolai/'
					target='_blank'
					rel='noreferrer'
				>
					<FaInstagram />
				</a>
				<a
					href='https://github.com/MititelNikolai'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub />
				</a>
				<a href='https://twitter.com/mititeln' target='_blank' rel='noreferrer'>
					<FaTwitter />
				</a>
			</div>
			<div className='footer__copyrights'>
				<small>&copy; {t('footerCopy')}</small>
			</div>
		</footer>
	)
}

export default Footer
