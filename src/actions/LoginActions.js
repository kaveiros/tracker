import * as LOGINACTIONS from '../actionTypes/LoginActionTypes'

export const isLoggedIn = (user) => {

    return (dispatch) => {
        
        console.log("THUNK!!")
        console.log(user)
        if (user.username=="admin" && user.password=="admin") {
            console.log("loggedin")
            dispatch(login(user))
            localStorage.setItem("Tracker", "sdasdasdsadadasdadadaadsd")
        }
        else {
            console.log("notloggedin")
            dispatch(logout())
        }
    }
}

export const login = (user) =>{
    
    return {
        type: LOGINACTIONS.LOGIN
    }

}

export const logout = () =>{

    return {
        type: LOGINACTIONS.LOGOUT
    }

}

export const fetchAuthState = () => {

    return {
        type : LOGINACTIONS.LOGSTATE
    }
}