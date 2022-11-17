import React from 'react'

const LoginPage = ({ appUuid }) => {
    const style = {
        width: '100%',
        height: '400px',
        border: 'none'
    }
    return (
        <div>
            <iframe src={`http://${window.location.hostname}:3500/login?uid=${appUuid}`} style={style}></iframe>
        </div>
    )
}

export default LoginPage