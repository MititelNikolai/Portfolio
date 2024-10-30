import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      /*Home*/
      subTitleHome: "Привет, меня зовут",
      titleHome: "Митител Николай",
      vacancy: "Junior React Разработчик",
      talk: "Связаться со мной",
      /* About */
      subTitleAbout: "Давайте знакомиться",
      titleAbout: "Обо мне",
      description:
        "Привет! Меня зовут Николай, я веб-разработчик из Дубоссар, Молдова. Начав с программирования на Visual Basic в школе, я развивался через Java в университете и затем увлёкся веб-разработкой, создав свои первые сайты на WordPress. Со временем освоил HTML, CSS, JavaScript и React, завершив курсы на Scrimba и Udemy, включая мастер-классы по JavaScript, CSS и React с Redux. В данный момент я ищу работу на позицию Junior React-разработчика.",
      experience: "Опыт",
      clients: "Клиенты",
      projects: "Проекты",
      experienceText: "1+ года работы",
      clientsText: "3",
      projectsText: "3 завершенных",
      /*Experience*/
      subTitleExperience: "Какие у меня навыки",
      titleExperience: "Мой опыт",
      /*Card */
      cardFrontendText: "Frontend разработка",
      cardSubtextExp: "Опытный",
      cardSubtextInt: "Средний",
      cardBackendText: "Backend разработка",
      /*Portfolio*/
      subTitlePortfolio: "Мои недавние работы",
      titlePortfolio: "Портфолио",
      wordPress: "Сайты на WordPress",
      certificate: "Мои сертификаты",
      demo: "Демо",
      live: "Смотреть",
      /*Contact*/
      subTitleContact: "Связаться",
      titleContact: "Свяжитесь со мной",
      email: "E-mail",
      message: "Отправить сообщение",
      /*Contact.form*/
      yourName: "Ваше полное имя",
      yourEmail: "Ваш E-mail",
      yourMessage: "Ваше сообщение",
      success: "Ваше сообщение было отправлено",
      /*Footer*/
      footerHome: "Домой",
      footerAbout: "Обо мне",
      footerExperience: "Опыт",
      footerPortfolio: "Портфолио",
      footerContact: "Связь",
      footerCopy: "Митител Николай. 2024.",
    },
  },
  en: {
    translation: {
      /*Home*/
      subTitleHome: "Hello, my name is",
      titleHome: "Mititel Nikolay",
      vacancy: "Junior React Developer",
      talk: "Contact me",
      /* About */
      subTitleAbout: "Let's get acquainted",
      titleAbout: "About me",
      description:
        "Hello! My name is Nikolay, a web developer from Dubossary, Moldova. I began programming with Visual Basic in school, progressed to Java in university, and eventually became interested in web development. I created my first websites on WordPress and later expanded my skills to HTML, CSS, JavaScript, and React, completing courses on Scrimba and Udemy, including masterclasses in JavaScript, CSS, and React with Redux. Currently, I'm seeking a Junior React Developer position.",
      experience: "Experience",
      clients: "Clients",
      projects: "Projects",
      experienceText: "1+ year of work",
      clientsText: "3",
      projectsText: "3 completed",
      /*Experience*/
      subTitleExperience: "My skill set",
      titleExperience: "My experience",
      /*Card */
      cardFrontendText: "Frontend Development",
      cardSubtextExp: "Experienced",
      cardSubtextInt: "Intermediate",
      cardBackendText: "Backend Development",
      /*Portfolio*/
      subTitlePortfolio: "My recent works",
      titlePortfolio: "Portfolio",
      wordPress: "WordPress sites",
      certificate: "My certificates",
      demo: "Demo",
      live: "Live",
      /*Contact*/
      subTitleContact: "Contact",
      titleContact: "Get in touch with me",
      email: "E-mail",
      message: "Send message",
      /*Contact.form*/
      yourName: "Your full name",
      yourEmail: "Your E-mail",
      yourMessage: "Your message",
      success: "Your message has been sent",
      /*Footer*/
      footerHome: "Home",
      footerAbout: "About me",
      footerExperience: "Experience",
      footerPortfolio: "Portfolio",
      footerContact: "Contact",
      footerCopy: "Mititel Nikolay. 2024.",
    },
  },

  ro: {
    translation: {
      /*Home*/
      subTitleHome: "Salut, mă numesc",
      titleHome: "Mititel Nicolai",
      vacancy: "Junior React Developer",
      talk: "Contactează-mă",
      /* About */
      subTitleAbout: "Să facem cunoștință",
      titleAbout: "Despre mine",
      description:
        "Salut! Mă numesc Nicolai și sunt dezvoltator web din Dubăsari, Moldova. Am început cu Visual Basic în școală, am progresat la Java la universitate și ulterior m-am orientat către dezvoltarea web. Am creat primele mele site-uri pe WordPress și am continuat să-mi extind competențele la HTML, CSS, JavaScript și React, finalizând cursuri pe Scrimba și Udemy, inclusiv masterclass-uri în JavaScript, CSS și React cu Redux. În prezent, caut o poziție de Junior React Developer.",
      experience: "Experiență",
      clients: "Clienți",
      projects: "Proiecte",
      experienceText: "Peste 1 an de lucru",
      clientsText: "3",
      projectsText: "3 finalizate",
      /*Experience*/
      subTitleExperience: "Setul meu de abilități",
      titleExperience: "Experiența mea",
      /*Card */
      cardFrontendText: "Dezvoltare Frontend",
      cardSubtextExp: "Experimentat",
      cardSubtextInt: "Intermediar",
      cardBackendText: "Dezvoltare Backend",
      /*Portfolio*/
      subTitlePortfolio: "Proiectele mele recente",
      titlePortfolio: "Portofoliu",
      wordPress: "Site-uri WordPress",
      certificate: "Certificatele mele",
      demo: "Demo",
      live: "Vizualizează",
      /*Contact*/
      subTitleContact: "Contact",
      titleContact: "Contactează-mă",
      email: "E-mail",
      message: "Trimite mesaj",
      /*Contact.form*/
      yourName: "Numele complet",
      yourEmail: "E-mail",
      yourMessage: "Mesajul tău",
      success: "Mesajul tău a fost trimis",
      /*Footer*/
      footerHome: "Acasă",
      footerAbout: "Despre mine",
      footerExperience: "Experiență",
      footerPortfolio: "Portofoliu",
      footerContact: "Contact",
      footerCopy: "Mititel Nicolai. 2024.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
