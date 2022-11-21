import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChats, getAllUser, setToDisplay } from '../../redux'
import avatar from '../../assets/images/defaul_pic.svg'
import './style.css'
import { useEffect } from 'react'
import uuid from 'react-uuid'
import { useState } from 'react'
import { ImImage } from 'react-icons/im'

const ContactList = () => {
    const [userDialogue, setUserDialogue] = useState([])
    const [conversations, account, users] = useSelector(state => [state.chats, state.account, state.users]);
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(getChats()), 500)
        setTimeout(() => dispatch(getAllUser()), 600)
    }, [])
    useEffect(() => {
        setUserDialogue([account.id])
    }, [account])
    const liste = [];
    const selectConversation = (conv, chatter) => {
        dispatch(setToDisplay({
            titre: chatter[0].username,
            contact: chatter[0]._id,
            info: 'offline',
            genre: 'chat',
            id: conv._id,
            newer: conv.newer ? true : false
        }))
    }

    conversations.forEach((c) => {
        const chatter = c.chatter.filter(chatter => chatter._id != account.id);
        if (userDialogue.indexOf(chatter[0]._id) == -1)
            setUserDialogue(d => [...d, chatter[0]._id]);
        liste.push(
            <div className='contact' key={uuid()} onClick={e => selectConversation(c, chatter)}>
                <img src={chatter[0].image ? chatter[0].image : avatar} alt="Raghav-profil" />
                <span>{chatter[0].username}</span>

                <span>
                    {
                        c.messages[c.messages.length - 1].genre == 'text' ?
                            c.messages[c.messages.length - 1].content.slice(0, 20) + '...' :
                            <ImImage />
                    }
                </span>
            </div>
        )
    });
    liste.push(<h5 key={uuid()}>New Chat</h5>)
    users.forEach((u) => {
        const isUserInConversation = userDialogue.indexOf(u._id) != -1;
        if (!isUserInConversation) {
            liste.push(
                <div
                    className='contact'
                    key={uuid()}
                    onClick={e => selectConversation({ newer: true, }, [u])}
                >
                    <img src={u.image ? u.image : avatar} alt="Raghav-profil" />
                    <span>{u.username}</span>
                    <span></span>
                </div>
            )
        }
    })
    return (
        <div className='contact-list'>
            <h5>Recent</h5>
            {liste}
        </div>
    )
}

export default ContactList