import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			/*Home*/
			subTitleHome: "Hello I'm",
			titleHome: 'Mititel Nikolai',
			vacancy: 'Junior React Developer',

			talk: "Let's Talk",
			/* About */
			subTitleAbout: 'Get to know',
			titleAbout: 'About Me',
			description:
				'Hello! My name is Nikolai. I am from the small town of Dubossary, which is located in Moldova. I have been programming since the 9th grade. The path began with Visual Basic, solved ordinary school problems in computer science classes, then began to travel to the city Olympiads. Then, in the 11th grade, he began to study Java on his own, in which he wrote simple programs at the university to solve applied problems in the strength of materials. Then I got interested in web development. Started with WordPress, built my first ExportCar project and fell in love with web development. Then I made a website for my city also on Wordpress. At the same time, I began to study more HTML/CSS/JavaScript, and then started learning React on a course from Bob Ziroll on the Scrimba platform. Now I am looking for a job for the position of Junior React it is faster and more efficient to develop in a team of like-minded people while benefiting society',
			experience: 'Experience',
			clients: 'Clients',
			projects: 'Projects',
			experienceText: '1+ Years Working',
			clientsText: '2+ Worldwide',
			projectsText: '2 Completed',
			/*Experience*/
			subTitleExperience: 'What skill I have',
			titleExperience: 'My Experience',
			/*Card */
			cardFrontendText: 'Frontend Development',
			cardSubtextExp: 'Experienced',
			cardSubtextInt: 'Intermediate',
			cardBackendText: 'Backend Development',
			/*Portfolio*/
			subTitlePortfolio: 'My Recent Work',
			titlePortfolio: 'Portfolio',
			wordPress: 'WordPress Sites',
			demo: 'Demo',
			live: 'Live',
			/*Contact*/
			subTitleContact: 'Get  In Touch',
			titleContact: 'Contact Me',
			email: 'E-mail',
			message: 'Send a message',
			/*Contact.form*/
			yourName: 'Your Full Name',
			yourEmail: 'Your E-mail',
			yourMessage: 'Your Message',
			success: 'Your message has been sent',
			/*Footer*/
			footerHome: 'Home',
			footerAbout: 'About',
			footerExperience: 'Experience',
			footerPortfolio: 'Portfolio',
			footerContact: 'Contact',
			footerCopy: 'Mititel Nikolai. 2023.',
		},
	},
	ru: {
		translation: {
			/*Home*/
			subTitleHome: 'Привет, меня зовут',
			titleHome: 'Митител Николай',
			vacancy: 'Junior React Разработчик',
			talk: 'Связаться со мной',
			/* About */
			subTitleAbout: 'Давайте знакомиться',
			titleAbout: 'Обо мне',
			description:
				'Привет! Меня зовут Николай. Я из небольшого города Дубоссары, который находится в Молдове. Я программирую с 9 класса. Путь начался с Visual Basic, решал обычные школьные задачи на уроках информатики, потом стал ездить на городские олимпиады. Затем, в 11 классе, начал самостоятельно изучать Java, на которой писал в университете простые программы для решения прикладных задач по предмету сопротивление материалов. Потом я увлекся веб-разработкой. Начал с WordPress, построил свой первый проект ExportCar и влюбился в веб-разработку. Потом я сделал сайт для своего города тоже на Wordpress. В то же время я стал больше изучать HTML/CSS/JavaScript, а затем начал изучать React на курсе Боба Зиролла на платформе Scrimba. Сейчас ищу работу на должность Junior React, чтобы быстрее и эффективнее развиваться в команде единомышленников принося пользу обществу',
			experience: 'Опыт',
			clients: 'Клиенты',
			projects: 'Проекты',
			experienceText: '1+ года работы',
			clientsText: '2+ по всему миру',
			projectsText: '2 завершенных',
			/*Experience*/
			subTitleExperience: 'Какие у меня навыки',
			titleExperience: 'Мой опыт',
			/*Card */
			cardFrontendText: 'Frontend разработка',
			cardSubtextExp: 'Опытный',
			cardSubtextInt: 'Средний',
			cardBackendText: 'Backend разработка',
			/*Portfolio*/
			subTitlePortfolio: 'Мои недавние работы',
			titlePortfolio: 'Портфолио',
			wordPress: 'Сайты на WordPress',
			demo: 'Демо',
			live: 'Смотреть',
			/*Contact*/
			subTitleContact: 'Связаться',
			titleContact: 'Свяжитесь со мной',
			email: 'E-mail',
			message: 'Отправить сообщение',
			/*Contact.form*/
			yourName: 'Ваше полное имя',
			yourEmail: 'Ваш E-mail',
			yourMessage: 'Ваше сообщение',
			success: 'Ваше сообщение было отправлено',
			/*Footer*/
			footerHome: 'Домой',
			footerAbout: 'Обо мне',
			footerExperience: 'Опыт',
			footerPortfolio: 'Портфолио',
			footerContact: 'Связь',
			footerCopy: 'Митител Николай. 2023.',
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',

	interpolation: {
		escapeValue: false,
	},
})

export default i18n
