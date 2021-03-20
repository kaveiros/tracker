import { useState, useCallback, useEffect } from 'react';
import jwt_decode from "jwt-decode";

let logoutTimer

export const useAuth = () => {

    const [role, setRole] = useState(null)
    const [token, setToken] = useState(false)
    const [tokenExpirationDate, setTokenExpirationDate] = useState()
    const [username, setUsername] = useState(null)
    const [userId, setUserId] = useState(null)


    const login = useCallback((user, serverToken) => {

        let expirationDate = new Date(new Date().getTime() + 1000 * 60 * 60)
        setTokenExpirationDate(expirationDate)
        setToken(serverToken)
        setUsername(user.username)
        setUserId(user.userId)
        setRole(user.role)
        if (localStorage.getItem('user') === null){
            localStorage.setItem('user',
                JSON.stringify({
                    token: serverToken,
                    expiration: expirationDate.toISOString()
                }))
        }
        else {
            let user = JSON.parse(localStorage.getItem('user'))
            let token = user.token
            setToken(token)
            let decoded = jwt_decode(token)
            console.log(decoded)
            setUserId(decoded.userId)
            setRole(decoded.role)
            setUsername(decoded.username)
        }
    }, [])

    const logout = useCallback(() => {
        setToken(null);
        setRole(null)
        setTokenExpirationDate(null);
        localStorage.removeItem('user');
    }, [])

    useEffect(() => {
        if (token && tokenExpirationDate) {
          const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
          logoutTimer = setTimeout(logout, remainingTime);
        } else {
          clearTimeout(logoutTimer);
        }
      }, [token, logout, tokenExpirationDate]);
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user'));
        if (
          storedData &&
          storedData.token &&
          new Date(storedData.expiration) > new Date()
        ) {
            //recheck how to implement this 
          login( storedData.token, username);
        }
      }, [login]);
    
    return { token, role, login, logout, username };


}