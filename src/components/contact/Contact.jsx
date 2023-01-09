import React, { useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'
const Contact = () => {
	const { t, i18n } = useTranslation()
	const form = useRef()
	const [message, setMessage] = useState(false)
	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_2zn2m0m',
				'template_vqz20jk',
				form.current,
				'FGnBfLML1VP04XceE'
			)
			.then(setMessage(true))
		e.target.reset()
	}
	return (
		<section id='contact'>
			<h5>{t('subTitleContact')}</h5>
			<h2>{t('titleContact')}</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>{t('email')}</h4>
						<h5>mititel.kolya@icloud.com</h5>
						<a
							href='mailto:mititel.kolya@icloud.com'
							target='_blank'
							rel='noreferrer'
						>
							{t('message')}
						</a>
					</article>
					<article className='contact__option'>
						<FaTelegramPlane className='contact__option-icon' />
						<h4>Telegram</h4>
						<h5>mititel</h5>
						<a href='https://t.me/mititel' target='_blank' rel='noreferrer'>
							{t('message')}
						</a>
					</article>
					<article className='contact__option'>
						<FaWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+37377552714</h5>
						<a
							href='https://api.whatsapp.com/send?phone=37377552714'
							target='_blank'
							rel='noreferrer'
						>
							{t('message')}
						</a>
					</article>
				</div>
				{/*END OF CONTACT OPTIONS*/}
				<form ref={form} onSubmit={sendEmail}>
					<input type='text' name='name' placeholder={t('yourName')} required />
					<input
						type='email'
						name='email'
						placeholder={t('yourEmail')}
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder={t('yourMessage')}
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						{t('message')}
					</button>
					{message ? <p>{t('success')}</p> : ''}
				</form>
			</div>
		</section>
	)
}

export default Contact
