import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WrappChatPages from '../layouts/wrap-chat-pages'
import ChatPage from '../pages/chat-page'
import LoginPage from '../pages/login-page'
import SignupPage from '../pages/signup-page'

const ChatAppRoutes = ({ isLogin, appUuid }) => {

    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/login'} />} />
            <Route path='/signup' element={isLogin ? <Navigate to={'/user/chat'} /> : <SignupPage appUuid={appUuid} />} />
            <Route path='/login' element={isLogin ? <Navigate to={'/user/chat'} /> : <LoginPage appUuid={appUuid} />} />
            <Route path='/:user' element={isLogin ? <WrappChatPages /> : <Navigate to={'/login'} />}>
                <Route path='chat' element={<ChatPage />} />
            </Route>
        </Routes>
    )
}

export default ChatAppRoutes