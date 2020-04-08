import * as ACTION from '../actionTypes/LoginActionTypes'

const authState = {

    isLogedIn:false
}


const AuthReducer = (state = authState , action) =>{

    switch(action.type) {
        case ACTION.LOGIN:{
            return {
                ...authState,
                isLogedIn: true
            }
        }
        case ACTION.LOGOUT:{
            return{
                ...authState,
                isLogedIn: false
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
