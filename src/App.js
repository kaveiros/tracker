import React, {useCallback, useEffect, useState} from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import IncomingWorkTab from './views/work/IncomingWorkTab'
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


function App() {

    return (
            <Container style={backgroundStyle}>
                <SidebarPage />
                <Switch>
                    <AuthenticatedRoute path='/additional-info-pages' component={AdditionalInfoTable}/>
                    <AuthenticatedRoute path="/employeetab"  component={EmployeeTab}/>
                    <AuthenticatedRoute path="/employeeTable"  component={EmployeeTable}/>
                    <AuthenticatedRoute  path="/materialsTab"  component={Materials}/>
                    <AuthenticatedRoute path="/incoming-work-tab"  component={IncomingWorkTab}/>
                    <AuthenticatedRoute path="/warehouse"  component={InventoryTab}/>
                    <Route path="/adminPage">
                        <AdminPage />
                    </Route>
                    <AuthenticatedRoute path="/personelTable"  component={PersonnelTable}/>
                    <AuthenticatedRoute path="/sector"  component={Sector}/>
                    <AuthenticatedRoute path="/tools"  component={GearTab}/>
                    <Route path="/not-found">
                        <NotFound />
                    </Route>
                    <AuthenticatedRoute path="/"  exact component={Dashboard}/>
                    <Route path="/login" exact component={LoginComponent}/>
                    <Redirect to="/not-found" />
                </Switch>
            </Container>
    );
}

export default App;
