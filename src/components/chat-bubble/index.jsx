import React from 'react'
import './style.css'

const ChatBubble = ({ children, right = false }) => {
    return (
        <div className={'chat-bubble ' + (right ? 'right' : 'left')}>
            <div className='dialogue'>{children}</div>
            <div className='dialogue-queue'></div>
        </div>
    )
}

export default ChatBubble