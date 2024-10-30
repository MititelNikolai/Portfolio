import React from "react";
import { FaInstagram, FaGithub, FaTelegramPlane } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
      <a href='https://t.me/mititel' target='_blank' rel='noreferrer'>
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default HeaderSocials;
