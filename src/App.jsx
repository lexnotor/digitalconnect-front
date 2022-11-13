import { useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import ChatAppRoutes from './routes';

function App() {
    const [io_socket, _] = useState(io("http://localhost:3500"));

    io_socket.on('user_success_connect', () => {
        console.log("Fini")
    });

    io_socket.emit('wait_user_connect', 23)
    return (
        <div className="app">
            <ChatAppRoutes />
        </div>
    )
}

export default App
