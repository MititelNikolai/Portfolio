import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
//import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineWorkOutline, MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./nav.css";
import { useState } from "react";
const Nav = () => {
  const { i18n } = useTranslation();
  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const [activNav, setActiveNav] = useState("#home");
  const [activeLang, setActiveLang] = useState("eng");
  return (
    <nav>
      <a
        href='#home'
        onClick={() => setActiveNav("#home")}
        className={activNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav("#experience")}
        className={activNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      {
        <a
          href='#portfolio'
          onClick={() => setActiveNav("#portfolio")}
          className={activNav === "#portfolio" ? "active" : ""}
        >
          <MdOutlineWorkOutline />
        </a>
      }
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>

      <ul className='topmenu'>
        <li>
          <button>
            <MdLanguage />
          </button>
          <ul className='submenu'>
            <li>
              <button
                value='en'
                className={activeLang === "eng" ? "active" : ""}
                onClick={(e) => {
                  setActiveLang("eng");
                  onChangeLanguage(e);
                }}
              >
                EN
              </button>
            </li>
            <li>
              <button
                value='ru'
                className={activeLang === "ru" ? "active" : ""}
                onClick={(e) => {
                  setActiveLang("ru");
                  onChangeLanguage(e);
                }}
              >
                RU
              </button>
            </li>
            <li>
              <button
                value='ro'
                className={activeLang === "ro" ? "active" : ""}
                onClick={(e) => {
                  setActiveLang("ro");
                  onChangeLanguage(e);
                }}
              >
                RO
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
