import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import WrappChatPages from '../layouts/wrap-chat-pages'
import ChatPage from '../pages/chat-page'
import LoginPage from '../pages/login-page'

const ChatAppRoutes = ({ isLogin, appUuid }) => {

    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/login'} />} />
            <Route path='/login' element={isLogin ? <Navigate to={'/user/chat'} /> : <LoginPage appUuid={appUuid} />}>
            </Route>
            <Route path='/:user' element={isLogin ? <WrappChatPages /> : <Navigate to={'/login'} />}>
                <Route path='chat' element={<ChatPage />} />
            </Route>
        </Routes>
    )
}

export default ChatAppRoutes