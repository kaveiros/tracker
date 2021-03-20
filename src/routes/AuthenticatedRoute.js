import React, {useContext} from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

const AuthenticatedRoute = ({ path, component: Component,}) => {

    const auth = useContext(AuthContext)

    return (
        <Route
            path={path}
            render={props => {
                if (!auth.isLoggedIn) {
                    return <Redirect to="/login" />
                }
                else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export default AuthenticatedRoute