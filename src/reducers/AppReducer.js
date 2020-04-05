import * as ACTIONS from '../actionTypes/AppActionTypes'

const appState = {
    drawrerOpen : false
}

const AppReducer = (state = appState , action) => {
    
    switch(action.type) {
        case ACTIONS.OPEN_DRAWER :{
            return {
                ...state,
                drawrerOpen : true
            }
        }
        case ACTIONS.CLOSE_DRAWER : {
            return {
                ...state,
                drawrerOpen: false
            }
        }
        case ACTIONS.FETCH_DRAWER_STATE : {
            return {
                state
            }
        }
        default:
           return state
    }
    
}

export default AppReducer