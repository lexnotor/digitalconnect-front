import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-uuid'
import avatar from '../../assets/images/avatar.png'
import ChatBubble from '../../components/chat-bubble'
import { sendMessage } from '../../redux'
import './style.css'

const ChatContent = () => {
    const data = [];
    const [inputText, setInputText] = useState("");
    const [chats, toDisplay, account] = useSelector(state => [state.chats, state.display, state.account]);
    const dispatch = useDispatch();
    const chatToDisplay = chats.find(elm => elm._id == toDisplay.id);

    const changeInput = e => {
        setInputText(e.target.value)
    }

    const submitBtn = e => {
        dispatch(sendMessage(inputText, toDisplay.contact));
        setInputText("")
    }

    if ((!chatToDisplay) && toDisplay.newer) {

    } else if (chatToDisplay) {
        chatToDisplay.messages.forEach((sms) => {
            if (sms.sender != account.id) data.push(<ChatBubble key={uuid()}>{sms.content}</ChatBubble>)
            else data.push(<ChatBubble right={true} key={uuid()}>{sms.content}</ChatBubble>)
        });
    }
    else {
        return (
            <div className='ChatContent'>
                <div className="content-title"></div>
                <div className='content-list'>
                    <p className='please-select-chat'>Please Select one chat</p>
                </div>
                <div className='content-writer'></div>
            </div>
        )
    }
    // data.push(<h5 key={uuid()} style={{ textAlign: 'center', marginTop: '3em', color: 'var(--divider-color)' }}>Today</h5>)

    return (
        <div className='ChatContent'>
            <div className="content-title">
                <img src={avatar} alt="" />
                <span>{toDisplay.titre}</span>
                <span>{toDisplay.info}</span>
            </div>
            <div className='content-list'>
                {data}
            </div>
            <div className='content-writer'>
                <input type="text" value={inputText} onChange={changeInput} />
                <button onClick={submitBtn}><BiSend /></button>
            </div>
        </div>
    )
}

export default ChatContent