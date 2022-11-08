import React from 'react'
import ChatContent from '../layouts/chat-content'
import Repertoire from '../layouts/repertoire'

const ChatPage = () => {
    const style = { display: 'flex', flexDirection: 'row', gap: '2em' }
    return (
        <div style={style}>
            <Repertoire />
            <ChatContent />
        </div>
    )
}

export default ChatPage