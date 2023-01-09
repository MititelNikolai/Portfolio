import React from 'react'
import { useTranslation } from 'react-i18next'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
	const { t } = useTranslation()
	return (
		<section id='experience'>
			<h5>{t('subTitleExperience')}</h5>
			<h2>{t('titleExperience')}</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>{t('cardFrontendText')}</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>{t('cardSubtextInt')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>JavaScript</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>TypeScript</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Bootstrap</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>React + (Router and etc.)</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>Material UI</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
					</div>
				</div>

				<div className='experience__backend'>
					<h3>{t('cardBackendText')}</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>NODE JS</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>{t('cardSubtextInt')}</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon' />
							<div>
								<h4>MySQL</h4>
								<small className='text-light'>{t('cardSubtextExp')}</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
