import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const Card = (props) => {
    function insertCardIcon(text) {
        switch (text) {
            case 'Experience': return <FaAward className='about__icon' />
            case 'Clients': return <FiUsers className='about__icon' />
            case 'Projects': return <VscFolderLibrary className='about__icon' />
            default: <></>
        }

    }
    return (
        <article className='about__card'>
            {insertCardIcon(props.text)}
            <h5>{props.text}</h5>
            <small>{props.subText}</small>
        </article>
    )
}

export default Card