import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import IncomingWorkTab from './views/work/incoming/IncomingWorkTab'
import EmployeeTab from '../src/views/employee/EmployeeTab'
import WarehouseTab from './views/warehouse/WarehouseTab'
import Dashboard from './views/dashboard/Dashboard'
import LoginComponent from './views/login/LoginComponent'
import PersonnelTable from './views/personel/PersonnelTable'
import { Container } from 'rsuite'
import SidebarPage from './views/sidebar/SidebarPage'
import { backgroundStyle } from '../src/style/Style'
import NotFound from '../src/views/NotFound'
import AdminPage from '../src/views/admin/AdminPage'
import Sector from '../src/views/sector/Sector'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './routes/AuthenticatedRoute'
import GearTab from "./views/gear/GearTab";
import EmployeeTable from "./views/employee/EmployeeTable";
import AdditionalInfoTable from "./views/additionalInfo/AdditionalInfoTable";
import OutgoingWorkTab from "./views/work/outgoing/OutgoingWorkTab";
import WareHouseTable from "./views/warehouse/WareHouseTable";
import Section from "./views/section/Section";
import SectorTable from "./views/sector/SectorsTable";

function App() {

    return (
            <Container style={backgroundStyle}>
                <SidebarPage />
                <Switch>
                    <AuthenticatedRoute  path='/additional-info-pages' component={AdditionalInfoTable} />
                    <AuthenticatedRoute  path="/employeetab"  component={EmployeeTab} />
                    <AuthenticatedRoute  path="/employeeTable"  component={EmployeeTable} />
                    <AuthenticatedRoute  path="/section"  component={Section} />
                    <AuthenticatedRoute  path="/warehouse-table" component={WareHouseTable}/>
                    <AuthenticatedRoute  path="/incoming-work-tab"  component={IncomingWorkTab} />
                    <AuthenticatedRoute  path="/outgoing-work-tab"  component={OutgoingWorkTab} />
                    <AuthenticatedRoute  path="/warehouse"  component={WarehouseTab} />
                    <AuthenticatedRoute  path="/adminPage" component={AdminPage} />
                    <AuthenticatedRoute  path="/personelTable"  component={PersonnelTable} />
                    <AuthenticatedRoute  path="/sector"  component={Sector} />
                    <AuthenticatedRoute  path="/tools"  component={GearTab} />
                    <AuthenticatedRoute  path="/sector-table" component={SectorTable} />
                    <Route exact path="/not-found">
                        <NotFound />
                    </Route>
                    <Route path="/login"  component={LoginComponent} />
                    <AuthenticatedRoute exact path="/" component={Dashboard} />
                    <Redirect to="/not-found" />
                </Switch>
            </Container>
    );
}

export default App;
