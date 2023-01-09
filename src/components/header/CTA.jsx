import React from 'react'
import { useTranslation } from 'react-i18next'
//import CV from '../../assets/cv.pdf'
const CTA = () => {
	const { t } = useTranslation()
	return (
		<div className='cta'>
			{/**<a className='btn' href={CV} download>Download CV</a>**/}
			<a className='btn btn-primary' href='#contact'>
				{t('talk')}
			</a>
		</div>
	)
}

export default CTA
