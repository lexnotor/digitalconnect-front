import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ nom: '', prenom: '', username: '', email: '', psw: '' })
    const changeHandle = (e, key) => {
        setFormData(old => ({ ...old, [key]: e.target.value }))
    }
    const submitHandle = (e) => {
        let allFieldCorrect = formData.nom && (formData.nom.trim().length > 4)
        allFieldCorrect &= formData.prenom && (formData.prenom.trim().length > 4)
        allFieldCorrect &= formData.psw && (formData.psw.trim().length > 8)
        allFieldCorrect &= formData.username && (formData.username.trim().length > 6)
        allFieldCorrect &= formData.email && /^[a-zA-Z0-9._]{5,}@[a-z0-9]{3,}\.[a-z]{2,10}$/.test(formData.email)
        if (!allFieldCorrect)
            return alert("Please fill out all fileds, verify they are correct")
        fetch(`http://${window.location.hostname}:3500/api/v1/users/createuser`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: new URLSearchParams({ ...formData })
        })
            .then(data => {
                if (data.status != 201) {
                    console.log(data.status)
                    throw new Error("Error Creating user");
                }
                else return data.json()
            })
            .then(() => setFormData({ nom: '', prenom: '', username: '', email: '', psw: '' }))
            .then(() => navigate('/login'))
            .catch(err => console.table(err))
    }

    return (
        <form action="#" onSubmit={e => e.preventDefault()} className='signup-form'>
            <div className='signup-group-input'>
                <label htmlFor="nom">Nom *</label>
                <input type="text" name="nom" id="nom" required onChange={e => changeHandle(e, 'nom')} value={formData.nom} />
            </div>
            <div className='signup-group-input'>
                <label htmlFor="prenom">Prenom *</label>
                <input type="text" name="prenom" id="prenom" required onChange={e => changeHandle(e, 'prenom')} value={formData.prenom} />
            </div>
            <div className='signup-group-input'>
                <label htmlFor="username">Username *</label>
                <input type="text" name="username" id="username" required onChange={e => changeHandle(e, 'username')} value={formData.username} />
            </div>
            <div className='signup-group-input'>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required onChange={e => changeHandle(e, 'email')} value={formData.email} />
            </div>
            <div className='signup-group-input'>
                <label htmlFor="password">Password *</label>
                <input type="password" name="password" id="password" required onChange={e => changeHandle(e, 'psw')} value={formData.psw} />
            </div>
            <input type="submit" value='Inscription' onClick={submitHandle} />
        </form>
    )
}

export default SignupForm