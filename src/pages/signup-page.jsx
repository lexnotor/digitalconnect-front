import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../layouts/signup-form'

const SignupPage = () => {
    return (
        <div>
            <SignupForm />
            <Link to={"/login"} style={{ color: 'white' }}>Déjà un compte ? Connectez-vous</Link>
        </div>
    )
}

export default SignupPage