import React from 'react'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.instagram.com/new.nikolai/' target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href='https://github.com/MititelNikolai' target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href='https://twitter.com/mititeln' target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
    )
}

export default HeaderSocials