import React from 'react'
import ContactList from '../../components/contacts-list'
import SearchBar from '../../components/search-bar'
import './style.css'

const Repertoire = () => {
    return (
        <div className='repertoire'>
            <SearchBar />
            <ContactList />
        </div>
    )
}

export default Repertoire