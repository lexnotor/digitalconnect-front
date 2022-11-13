import React from 'react'

const LoginPage = () => {
    const style = {
        width: '100%',
        height: '400px',
        border: 'none'
    }
    return (
        <div>
            <iframe src={import.meta.env.VITE_BACKEND_LOGIN + '?uid=23'} style={style}></iframe>
        </div>
    )
}

export default LoginPage