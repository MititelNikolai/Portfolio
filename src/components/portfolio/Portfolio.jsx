import React from "react";
import { useTranslation } from "react-i18next";
import "./portfolio.css";
import { dataReact, dataWP, certificatesLinks } from "./data";

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id='portfolio'>
      <h2>{t("certificate")}</h2>

      <div className='container portfolio__wp__container'>
        {certificatesLinks.map(({ id, image, title, subtitle, live }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title[i18n.language]}</h3>
              <div className='portfolio_item-cta'>
                <a href={live} className='btn' target='_blank' rel='noreferrer'>
                  {t("live")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <h5 style={{ marginTop: "3rem" }}>{t("subTitlePortfolio")}</h5>
      <h2>{t("titlePortfolio")}</h2>

      <div className='container portfolio__container'>
        {dataReact.map(({ id, image, title, subtitle, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title[i18n.language]}</h3>
              <h5>{subtitle[i18n.language]}</h5>
              <div className='portfolio_item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  {t("demo")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <h2 style={{ marginTop: "3rem" }}>{t("wordPress")}</h2>
      <div className='container portfolio__wp__container'>
        {dataWP.map(({ id, image, title, subtitle, live }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title[i18n.language]}</h3>
              <h5>{subtitle[i18n.language]}</h5>
              <div className='portfolio_item-cta'>
                <a href={live} className='btn' target='_blank' rel='noreferrer'>
                  {t("live")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
