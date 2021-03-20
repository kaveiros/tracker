import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import WorkTab from '../src/views/work/WorkTab'
import EmployeeTab from '../src/views/employee/EmployeeTab'
import InventoryTab from '../src/views/WarehouseTab'
import Dashboard from './views/dashboard/Dashboard'
import LoginComponent from './views/login/LoginComponent'
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
import GearTab from "./views/gear/GearTab";
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hook/AuthHook";



function App() {
    const {token, role, login, logout, username} = useAuth()

  return (
      <AuthContext.Provider value={{
        isLoggedIn: !!token,
        role: role,
        username:username,
        token: token,
        login: login,
        logout: logout
      }}>
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
            <AuthenticatedRoute path="/tools" component={GearTab}/>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <AuthenticatedRoute path="/" exact component={Dashboard}/>
            <Route path="/login">
              <LoginComponent/>
            </Route>
            <Redirect to="/not-found" />
          </Switch>
      </Container>
      </AuthContext.Provider>
  );
}

export default App;
