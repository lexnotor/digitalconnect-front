import { createSlice } from "@reduxjs/toolkit";


/*{
        nom: '',
        prenom: '',
        username: '',
        uri: '',
        id: ''
    }
 */
export const user_slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            if ((!0 in action.payload)) return state;
            action.payload.forEach(elm => {
                (!state.find(user => user._id === elm._id)) && state.push(elm)
            })
        },
        setUser: (state, action) => {
            const index = state.findIndex(elm => action.payload.id === elm.id);
            if (index == -1) return state;
            state[index] = { ...state[index], ...action.payload }
        },
        deleteUser: (state, action) => {
            const index = state.findIndex(elm => action.payload.id === elm.id);
            if (index == -1) return state;
            state.splice(index, 1)
        }
    }
})

/*{
        id: '',
        username: '',
        email: '',
        nom: '',
        prenom: '',
        image: '',
        groups: '',
        conversation: '',
        isLogin: false
    }
 */
export const account_slice = createSlice({
    name: 'account',
    initialState: {},
    reducers: {
        setAccount: (state, action) => {
            return { ...state, ...action.payload }
        },
        setIsLogin: (state, action) => {
            return { ...state, isLogin: action.payload }
        },
        deleteAccount: (state) => {
            state = { isLogin: false }
        }
    }
})

/*{
        id: '',
        chatter: [],
        latest: new Date(),
        messages: [{
            sender: '',
            content: '',
            genre: '',
            read: false,
            time: new Date(),
            id: ''
        }],
        code: ''
    }
 */
export const chat_slice = createSlice({
    name: 'chats',
    initialState: [],
    reducers: {
        addChat: (state, action) => {
            // action.payload.forEach(elm => {
            //     (!state.find(chat => chat.id === elm._id)) && state.push(elm)
            // })
            if (!(0 in action.payload)) return state
            state = [...action.payload]
            state.sort((a, b) => new Date(b.latest).getTime() - new Date(a.latest).getTime())

            return state
        },
        addMessage: (state, action) => {
            const chat = state.find(elm => action.payload.id === elm.id);
            if (chat) chat.messages.push(action.payload.messages);
            chat.latest = action.payload.latest;
            state.sort((a, b) => new Date(a.latest).getTime() - new Date(b.latest).getTime());
        },
        deleteChat: (state, action) => {
            const index = state.findIndex(elm => action.payload.id === elm.id);
            if (index == -1) return state;
            state.splice(index, 1)
        }
    }
})
/**
 *  {
        titre: null,
        info: null,
        genre: 'chat',
        id: ''
    }
 */
export const display_slice = createSlice({
    name: 'displayer',
    initialState: {},
    reducers: {
        setToDisplay: (_, action) => {
            return {
                titre: action.payload.titre || 'Unknow',
                info: action.payload.info || 'offline',
                genre: action.payload.genre || 'chat',
                id: action.payload.id || '0',
                newer: action.payload.newer || false,
                contact: action.payload.contact,
            }
        },
        deleteToDisplay: (_, __) => {
            return {}
        }
    }
})
