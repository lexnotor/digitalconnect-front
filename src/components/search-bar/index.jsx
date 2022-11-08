import React from 'react'
import { FiMoreVertical, FiSearch } from 'react-icons/fi'
import './style.css'


const SearchBar = () => {
    return (
        <div className='search-bar'>
            <FiSearch />
            <input type="text" placeholder='Search' />
            <button><FiMoreVertical /></button>
        </div>
    )
}

export default SearchBar