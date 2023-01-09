import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
import { useTranslation } from 'react-i18next'
const Header = () => {
	const { t } = useTranslation()
	return (
		<header id='home'>
			<div className='container header__container'>
				<h5>{t('subTitleHome')}</h5>
				<h1>{t('titleHome')}</h1>
				<h5 className='text-light'>{t('vacancy')}</h5>
				<CTA />
				<HeaderSocials />
				<div className='me'>
					<img src={ME} alt='Me' />
				</div>
				<a href='#contact' className='scroll_down'>
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
