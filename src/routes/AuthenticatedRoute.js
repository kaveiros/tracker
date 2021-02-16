import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoginService from '../services/LoginService'

const AuthenticatedRoute = ({ path, component: Component,}) => {

    const token = LoginService.getCurrentUser()
    return (
        <Route
            path={path}
            render={props => {
                if (!token) {
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