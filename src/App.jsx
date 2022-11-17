import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import io from 'socket.io-client';
import './App.css';
import { getMyInfo, setIsLogin, getChats } from './redux';
import ChatAppRoutes from './routes';

function App() {
    const [io_socket, _] = useState(io(`http://${window.location.hostname}:3500/`));
    const account = useSelector(state => state.account.isLogin);
    const dispatch = useDispatch();
    const [switchUnread, setSwitchUnread] = useState(true)
    const [appUuid] = useState(uuid())

    io_socket.emit('wait_user_connect', appUuid)
    io_socket.on('newUnreadMessage', () => {
        setSwitchUnread(!switchUnread)
    })
    io_socket.on('user_success_connect', () => {
        dispatch(setIsLogin(true));
    });
    useEffect(() => {
        setTimeout(() => dispatch(getMyInfo(appUuid), 1000))
    }, [account])
    useEffect(() => {
        if (account) {
            setTimeout(() => dispatch(getChats()), 1000)
        }
    }, [switchUnread])
    return (
        <div className="app">
            <ChatAppRoutes isLogin={account} appUuid={appUuid} />
        </div>
    )
}

export default App
