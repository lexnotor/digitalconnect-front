import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import io from 'socket.io-client';
import './App.css';
import { getMyInfo, setIsLogin } from './redux';
import ChatAppRoutes from './routes';

function App() {
    const [io_socket, _] = useState(io(`http://${window.location.hostname}:3500/`));
    const account = useSelector(state => state.account.isLogin);
    const dispatch = useDispatch();
    const [appUuid] = useState(uuid())

    io_socket.emit('wait_user_connect', appUuid)
    io_socket.on('user_success_connect', () => {
        dispatch(setIsLogin(true));
    });
    useEffect(() => {
        setTimeout(() => dispatch(getMyInfo(), 500))
    }, [account])
    return (
        <div className="app">
            <ChatAppRoutes isLogin={account} appUuid={appUuid} />
        </div>
    )
}

export default App
