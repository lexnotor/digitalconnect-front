import { configureStore } from "@reduxjs/toolkit";
import * as slices from './slice.js'

export const { addChat, addMessage, deleteChat } = slices.chat_slice.actions;
export const { addUser, deleteUser, setUser } = slices.user_slice.actions;
export const { setAccount, deleteAccount, setIsLogin } = slices.account_slice.actions;
export const { setToDisplay, deleteToDisplay } = slices.display_slice.actions;


// Get One Chat middleware
export const getChat = (chatId) => {
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/chats/user/c/${chatId}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include'
        })
            .then(data => data.json())
            .then(data => dispatch(addChat(data)))
    }
}

// Get All Chat middleware
export const getChats = () => {
    console.log("Dispatch getChat")
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/chats/user/conversations`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include'
        })
            .then(data => data.json())
            .then(data => dispatch(addChat((data))));
    }
}

export const getMyInfo = (appUuid) => {
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/users/me?uid=${appUuid}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        })
            .then(response => (response.status == 200) ? response.json() : null)
            .then(data => {
                dispatch(setAccount(data))
                data && dispatch(setIsLogin(true))
            })
            .catch(err => {
                dispatch(deleteAccount())
                setIsLogin(false)
            });
    }
}

export const getAllUser = () => {
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/users/contacts`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include'
        })
            .then(data => data.json())
            .then(data => dispatch(addUser(data)))
    }
}

export const sendMessage = (text, to) => {
    if (!text.trim().length || !to) return () => { };
    console.log(text, to);
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/chats/user/send`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: new URLSearchParams({ text, he: to })
        })
            .then(data => data.json())
            .then(data => dispatch(getChats()))
            .catch(err => console.log("Erreur lors de l'envoi de message"))
    }
}

export const logoutUser = () => {
    return dispatch => {
        fetch(`http://${window.location.hostname}:3500/api/v1/connect/logout`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include'
        })
            .then(data => dispatch(setIsLogin(false)))
            .catch(err => console.log("Erreur lors de la deconnexion"))
    }
}

export const store = configureStore({
    reducer: {
        'chats': slices.chat_slice.reducer,
        'users': slices.user_slice.reducer,
        'account': slices.account_slice.reducer,
        'display': slices.display_slice.reducer
    }
})

