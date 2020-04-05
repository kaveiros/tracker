import * as ACTIONS from '../actionTypes/AppActionTypes'

export const fetchDrawerState = () =>{

    return {
        type: ACTIONS.FETCH_DRAWER_STATE
    }

}

export const openDrawer = () =>{

    return {
        type: ACTIONS.OPEN_DRAWER
    }

}

export const closeDrawer = () =>{

    return {
        type: ACTIONS.CLOSE_DRAWER
    }

}