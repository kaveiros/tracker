import React, {Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import TokenService from "../services/TokenService";
const AuthenticatedRoute = ({ path, roles, component: Component}) => {

    let decodedToken
    const token = TokenService.getCurrentUser()
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
