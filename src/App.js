import React from 'react';
import 'rsuite/dist/rsuite.min.css';
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
import SectionsTable from "./views/section/SectionsTable";
import RoleHook from "./views/roles/RoleHook";
import PermissionsModal from "./views/common/PermissionsModal";
import RolesTable from "./views/roles/RolesTable";

function App() {

    return (
            <Container style={backgroundStyle}>
                <SidebarPage />
                <Switch>
                    <AuthenticatedRoute  path='/additional-info-pages' component={AdditionalInfoTable} roles={["ADMIN", "MODERATOR"]} />
                    <AuthenticatedRoute  path="/employeetab"  component={EmployeeTab}  roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/employeeTable"  component={EmployeeTable}  roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/section"  component={Section}  roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/warehouse-table" component={WareHouseTable} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/incoming-work-tab"  component={IncomingWorkTab} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/outgoing-work-tab"  component={OutgoingWorkTab} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/warehouse"  component={WarehouseTab} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/adminPage" component={AdminPage} roles={["ADMIN", "MODERATOR"]} />
                    <AuthenticatedRoute  path="/personelTable"  component={PersonnelTable} roles={["ADMIN", "MODERATOR"]} />
                    <AuthenticatedRoute  path="/sector"  component={Sector} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/tools"  component={GearTab} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/sector-table" component={SectorTable} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute  path="/section-table" component={SectionsTable} roles={["ADMIN", "MODERATOR"]}/>
                    <AuthenticatedRoute path="/role" component={RoleHook}roles={["MOD", "MODERATOR"]} />
                    <AuthenticatedRoute  path="/roles-table" component={RolesTable} roles={["ADMIN", "MODERATOR"]}/>
                    <Route exact path="/not-found">
                        <NotFound />
                    </Route>
                    <Route path="/login"  component={LoginComponent} />
                    <Route path="/permissions" component={PermissionsModal} />
                    <AuthenticatedRoute exact path="/" component={Dashboard} roles={["ADMIN", "MODERATOR", "MOD"]}/>
                    <Redirect to="/not-found" />
                </Switch>
            </Container>
    );
}

export default App;
