import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoginService from "../services/LoginService";
import jwt_decode from "jwt-decode";
const AuthenticatedRoute = ({ path, roles, component: Component}) => {

    let decodedToken
    const token = LoginService.getCurrentUser()
    if (token) {
        decodedToken = jwt_decode(token)
        //console.log(decodedToken.role)

    }
    //console.log(roles)

    return (
        <Route
            path={path}
            render={props => {
                if (!token) {
                    return <Redirect to="/login" />
                }
                if(roles.includes(decodedToken.role)){
                    return <Component {...props} />
                }
                else {
                    return <Redirect to="/permissions" />
                }
            }}
        />
    )
}

export default AuthenticatedRoute
