import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import WrappChatPages from '../layouts/wrap-chat-pages'
import ChatPage from '../pages/chat-page'

const ChatAppRoutes = () => {
    return (
        <Routes>
            <Route path='/:user' element={<WrappChatPages />}>
                <Route path='chat' element={<ChatPage />} />
            </Route>
        </Routes>
    )
}

export default ChatAppRoutes