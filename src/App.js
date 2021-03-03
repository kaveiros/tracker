import React, {useCallback, useEffect, useState} from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import IncomingWorkTab from './views/work/incoming/IncomingWorkTab'
import EmployeeTab from '../src/views/employee/EmployeeTab'
import InventoryTab from '../src/views/WarehouseTab'
import Dashboard from './views/dashboard/Dashboard'
import LoginComponent from './views/login/LoginComponent'
import PersonnelTable from './views/personel/PersonnelTable'
import { Container } from 'rsuite'
import SidebarPage from './views/sidebar/SidebarPage'
import { backgroundStyle } from '../src/style/Style'
import Materials from './views/materials/MaterialTab'
import NotFound from '../src/views/NotFound'
import AdminPage from '../src/views/admin/AdminPage'
import Sector from '../src/views/sector/Sector'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './routes/AuthenticatedRoute'
import GearTab from "./views/gear/GearTab";
import EmployeeTable from "./views/employee/EmployeeTable";
import AdditionalInfoTable from "./views/additionalInfo/AdditionalInfoTable";
import OutgoingWorkTab from "./views/work/outgoing/OutgoingWorkTab";
import useAuthHook from "./hook/useAuthHook";

function App() {

    const  { user} = useAuthHook()
    console.log(user)

    return (
            <Container style={backgroundStyle}>
                <SidebarPage />
                <Switch>
                    <AuthenticatedRoute path='/additional-info-pages' component={AdditionalInfoTable} user={user[0]}/>
                    <AuthenticatedRoute path="/employeetab"  component={EmployeeTab} user={user[0]}/>
                    <AuthenticatedRoute path="/employeeTable"  component={EmployeeTable} user={user[0]}/>
                    <AuthenticatedRoute path="/materialsTab"  component={Materials} user={user[0]}/>
                    <AuthenticatedRoute path="/incoming-work-tab"  component={IncomingWorkTab} user={user[0]}/>
                    <AuthenticatedRoute path="/outgoing-work-tab"  component={OutgoingWorkTab} user={user[0]}/>
                    <AuthenticatedRoute path="/warehouse"  component={InventoryTab} user={user[0]}/>
                    <AuthenticatedRoute path="/adminPage" component={AdminPage} user={user[0]}/>
                    <AuthenticatedRoute path="/personelTable"  component={PersonnelTable} user={user[0]}/>
                    <AuthenticatedRoute path="/sector"  component={Sector} user={user[0]}/>
                    <AuthenticatedRoute path="/tools"  component={GearTab} user={user[0]}/>
                    <Route path="/not-found">
                        <NotFound />
                    </Route>
                    <Route path="/login"  component={LoginComponent} />
                    <AuthenticatedRoute path="/"  exact component={Dashboard} user={user[0]}/>
                    <Redirect to="/not-found" />
                </Switch>
            </Container>
    );
}

export default App;
