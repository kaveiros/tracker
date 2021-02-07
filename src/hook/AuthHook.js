import { useState, useCallback, useEffect } from 'react';

let logoutTimer

export const AuthHook = () => {

    const [token, setToken] = useState(false)
    const [tokenExpirationDate, setTokenExpirationDate] = useState()
    const [user, setUser] = useState(false)
    const [username, setUsername] = useState(null)


    const login = useCallback((user, token, expiration) => {

        let username = user.username
        let expirationDate = expiration || new Date(new Date().getTime() + 1000 * 60 * 60)
        setTokenExpirationDate(expirationDate)
        setUser(user)
        setToken(token)
        setUsername(user.username)
        localStorage.setItem('userData',
            JSON.stringify({
                token: token,
                expiration: expirationDate.toISOString()
            }))
    }, [])

    const logout = useCallback(() => {
        setToken(null);
        setTokenExpirationDate(null);
        setUser(null);
        localStorage.removeItem('userData');
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
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (
          storedData &&
          storedData.token &&
          new Date(storedData.expiration) > new Date()
        ) {
            //recheck how to implement this 
          login(user, storedData.token, new Date(storedData.expiration));
        }
      }, [login]);
    
      return { token, login, logout, username, user };


}