import * as LOGINACTIONS from '../actionTypes/LoginActionTypes'

export const authenticate = (user) => {

    return (dispatch) => {
        
        console.log("THUNK!!")
        console.log(user)
        if (user.username==="admin" && user.password==="admin") {
            console.log("loggedin")
            dispatch(login())
            localStorage.setItem("Tracker", "sdasdasdsadadasdadadaadsd")
        }
        else {
            console.log("notloggedin")
            dispatch(logout())
        }
    }
}

export const getAuthenticationStatus = () => {
    
    return (dispatch) => {
       const hasCookie =  localStorage.getItem('Tracker')
       if(hasCookie != null && hasCookie === "sdasdasdsadadasdadadaadsd") {
           dispatch(login())
       }
    }
}

export const destroyAuthentication = () => {
    return (dispatch) => {
        const hasCookie =  localStorage.getItem('Tracker')
        if(hasCookie != null && hasCookie === "sdasdasdsadadasdadadaadsd") {
            localStorage.removeItem('Tracker')
            dispatch(logout())
        }
     }
}


export const login = () =>{
    
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