import { useEffect, useState } from 'react'
import LoginService from '../services/LoginService'
import jwt_decode from "jwt-decode";
import { useCallback } from 'react';


const useAuth = () => {

    const [isAuth, setIsAuth] = useState(false)
    const [isAutho, setAutho] = useState(false)

    const checkIsAuth = useCallback(() => {
        const token = LoginService.getCurrentUser()
        if (token) {
            setIsAuth(true)
        }
    },[])

    const checkIsAutho = useCallback(() => {
        const token = LoginService.getCurrentUser()
        const decoded = jwt_decode(token)
        if (decoded.role === 'ADMIN') {
            setAutho(true)
        }

    },[])

    useEffect(() => {
        const token = LoginService.getCurrentUser()
        if (token) {
            setIsAuth(true)
        }
        console.log("isAuth")
        console.log(isAuth)
        if (isAuth) {
            const decoded = jwt_decode(token)
            if (decoded.role === 'ADMIN') {
                setAutho(true)
            }
            console.log("isAutho")
            console.log(isAutho)
        }
    })

    return { isAuth, isAutho }
}

export default useAuth