import React from 'react'
import avatar from '../../assets/images/avatar.png'
import './style.css'

const ContactList = () => {
    const liste = [];
    for (let i = 0; i < 4; i++) liste.push(
        <div className='contact'>
            <img src={avatar} alt="Raghav-profil" />
            <span>Raghav</span>
            <span>Dinner ?</span>
        </div>
    )
    return (
        <div className='contact-list'>
            <h5>Recent</h5>
            {liste}
        </div>
    )
}

export default ContactList