import * as ACTION from '../actionTypes/LoginActionTypes'

const authState = {

    isLoggedIn:false
}


const AuthReducer = (state = authState , action) =>{

    switch(action.type) {
        case ACTION.LOGIN:{
            return {
                ...authState,
                isLoggedIn: true
            }
        }
        case ACTION.LOGOUT:{
            return{
                ...authState,
                isLoggedIn: false
            }
        }
        case ACTION.LOGSTATE:{
            return authState
        }
        default:
            return authState

    }


}

export default AuthReducer
