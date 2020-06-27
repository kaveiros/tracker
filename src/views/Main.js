import React, { Component } from 'react'
import Menu from './Menu'
import { Router } from '@reach/router'
import WorkTab from './WorkTab'
import EmployeeTab from './EmployeeTab'
import InventoryTab from './WarehouseTab'
import Dashboard from './Dashboard'
import Tools from './Tools'
import Login from './Login'
import LogoutPanel from './LogoutPanel'
import {connect} from 'react-redux'
import * as LoginActions from '../actions/LoginActions'
import PersonelTable from './PersonelTable'




class Main extends Component {

    componentDidMount(){
        this.props.onFetchAuthState()
    }


    render() {
        return (
            this.props.isAuthenticated ?
                <React.Fragment>
                    <Menu />
                    <Router>
                        <Dashboard default />
                        <WorkTab path="/worktab" />
                        <EmployeeTab path="/employeetab" />
                        <InventoryTab path="/warehouse" />
                        <Tools path="/tools" />
                        <LogoutPanel path="/logout"/>
                        <PersonelTable path="/personelTable"/>
                    </Router>
                </React.Fragment> : <Login path="/login"/>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAuthState: () => dispatch(LoginActions.getAuthenticationStatus())
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isLoggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Main)