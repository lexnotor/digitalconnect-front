import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({ appUuid }) => {
    const style = {
        width: '100%',
        height: '300px',
        border: 'none',
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <iframe src={`http://${window.location.hostname}:3500/login?uid=${appUuid}`} style={style}></iframe>
            <Link to={"/signup"}>Pas de compte ? Inscrivez-vous</Link>
        </div>
    )
}

export default LoginPage