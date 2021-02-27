import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import WorkTab from '../src/views/work/WorkTab'
import EmployeeTab from '../src/views/employee/EmployeeTab'
import InventoryTab from '../src/views/WarehouseTab'
import Dashboard from './views/dashboard/Dashboard'
import Tools from '../src/views/Tools'
import Login from '../src/views/login/Login'
import PersonelTable from './views/personel/PersonelTable'
import { Container } from 'rsuite'
import SidebarPage from './views/sidebar/SidebarPage'
import { backgroundStyle } from '../src/style/Style'
import Materials from './views/materials/MaterialTab'
import NotFound from '../src/views/NotFound'
import AdminPage from '../src/views/admin/AdminPage'
import Sector from '../src/views/sector/Sector'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './routes/AuthenticatedRoute'



function App() {
  return (
      <Container style={backgroundStyle}>
        <SidebarPage />
          <Switch>
            <AuthenticatedRoute path="/employeetab" component={EmployeeTab}/>
             <AuthenticatedRoute  path="/materialsTab" component={Materials}/>
            <AuthenticatedRoute path="/worktab" component={WorkTab}/>
            <AuthenticatedRoute path="/warehouse" component={InventoryTab}/>
            <Route path="/adminPage">
              <AdminPage />
            </Route>
            <AuthenticatedRoute path="/personelTable" component={PersonelTable}/>
            <AuthenticatedRoute path="/sector" component={Sector}/>
            <AuthenticatedRoute path="/tools" component={Tools}/>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <AuthenticatedRoute path="/" exact component={Dashboard}/>
            <Route path="/login">
              <Login/>
            </Route>
            <Redirect to="/not-found" />
          </Switch>
      </Container>
  );
}

export default App;
