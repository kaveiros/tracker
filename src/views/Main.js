import React, { Component } from 'react'
import Menu from './Menu'
import { Router } from '@reach/router'
import WorkTab from './WorkTab'
import EmployeeTab from './EmployeeTab'
import InventoryTab from './WarehouseTab'
import Dashboard from './Dashboard'
import Tools from './Tools'
import Login from './Login'
import { Container } from 'rsuite'

const state = {
    isLogedIn: false
}


class Main extends Component {


    render() {


        return (
            state.isLogedIn ?
                <Container>
                    <Menu />
                    <Router>
                        <Dashboard default />
                        <WorkTab path="/worktab" />
                        <EmployeeTab path="/employeetab" />
                        <InventoryTab path="/warehouse" />
                        <Tools path="/tools" />
                    </Router>
                </Container> : <Login />
        )
    }

}

export default Main