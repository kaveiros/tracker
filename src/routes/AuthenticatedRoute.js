import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const AuthenticatedRoute = ({ path, component: Component, user:user}) => {

    return (
        <Route
            path={path}
            render={props => {
                if (!user) {
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
