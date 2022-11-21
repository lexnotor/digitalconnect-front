import React from 'react'
import { useDispatch } from 'react-redux'
import { uploadPicture } from '../../redux';
import './style.css'

const UserProfil = () => {
    const dispatch = useDispatch();

    /**
     * 
     * @param {React.ChangeEvent} e 
     */
    const uploadHandle = e => {
        const files = e.target.files;
        const formData = new FormData()
        if (0 in files) {
            formData.append('myimage', files[0]);
            dispatch(uploadPicture(formData))
        }
    }

    return (
        <div className='UserProfil'>
            <input
                type="file"
                name="userimage"
                id="userimage"
                onChange={uploadHandle}
            />
        </div>
    )
}

export default UserProfil