import React, { Component } from 'react'
import { Container } from 'rsuite'

import Menu from './Menu'
import { Router } from '@reach/router'
import WorkTab from './WorkTab'
import EmployeeTab from './EmployeeTab'
import InventoryTab from './WarehouseTab'
import Dashboard from './Dashboard'
import Tools from './Tools'

class Panel extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu />
                <Router>
                    <Dashboard default />
                    <WorkTab path="/worktab" />
                    <EmployeeTab path="/employeetab" />
                    <InventoryTab path="/warehouse" />
                    <Tools path="/tools" />
                </Router>
            </React.Fragment>
        )
    }

}

export default Panel
