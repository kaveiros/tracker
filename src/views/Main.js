import React, { useContext } from 'react'
import { Router } from '@reach/router'
import WorkTab from '../views/work/WorkTab'
import EmployeeTab from '../views/employee/EmployeeTab'
import InventoryTab from './WarehouseTab'
import Dashboard from './Dashboard'
import Tools from './Tools'
import Login from '../views/login/Login'
import LogoutPanel from './LogoutPanel'
import PersonelTable from './PersonelTable'
import { Container } from 'rsuite'
import SidebarPage from './SidebarPage'
import { backgroundStyle } from '../style/Style'
import MaterialTab from './Materials'
import NotFound from './NotFound'
import AdminPage from './admin/AdminPage'
import Sector from './sector/Sector'
import { AuthContext } from '../context/Context'



const Main = () => {

    const authContext = useContext(AuthContext)

    return (
        <Container style={backgroundStyle}>
            <SidebarPage />
            <Container>
                {authContext.token ?
                    (<Router>
                        <Dashboard path="/" />
                        <WorkTab path="/worktab" />
                        <EmployeeTab path="/employeetab" />
                        <InventoryTab path="/warehouse" />
                        <Tools path="/tools" />
                        <LogoutPanel path="/logout" />
                        <PersonelTable path="/personelTable" />
                        <MaterialTab path="/materialsTab" />
                        <AdminPage path="/adminPage" />
                        <Sector path="/sector" />
                        <NotFound default />
                    </Router>) : (<Router>
                        <Login path="/" />
                    </Router>)}
            </Container>
        </Container>
    )

}

export default Main