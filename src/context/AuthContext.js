import {createContext} from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    role:null,
    username:null,
    token: null,
    login: () => {},
    logout: () => {}
})