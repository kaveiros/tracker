import React, { useEffect, useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
// import { AuthContext } from '../src/context/Context'
// import { AuthHook } from '../src/hook/AuthHook'
import WorkTab from '../src/views/work/WorkTab'
import EmployeeTab from '../src/views/employee/EmployeeTab'
import InventoryTab from '../src/views/WarehouseTab'
import Dashboard from '../src/views/Dashboard'
import Tools from '../src/views/Tools'
import Login from '../src/views/login/Login'
import PersonelTable from '../src/views/PersonelTable'
import { Container } from 'rsuite'
import SidebarPage from '../src/views/SidebarPage'
import { backgroundStyle } from '../src/style/Style'
// import MaterialTab from '../src/views/Materials'
import NotFound from '../src/views/NotFound'
import AdminPage from '../src/views/admin/AdminPage'
import Sector from '../src/views/sector/Sector'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import LoginService from './services/LoginService'



function App() {

  const [token, setToken] = useState()
  let history = useHistory();
  let routes


  useEffect(() => {
    setToken(LoginService.getCurrentUser())
  }, [])

  // const { user, username, token, login, logout } = AuthHook()


  if(!token) {
    return <Login/>
  }



  return (
    // <AuthContext.Provider value={{ user: user, username: username, token: token, login: login, logout: logout }}>
    <Container style={backgroundStyle}>
        <SidebarPage />
        <Container>
          <Switch>
            <Route path="/employeetab">
              <EmployeeTab />
            </Route>
            {/* <Route  path="/materialsTab">
            <MaterialTab />
          </Route> */}
            <Route path="/worktab">
              <WorkTab />
            </Route>
            <Route path="/warehouse">
              <InventoryTab />
            </Route>
            <Route path="/adminPage">
              <AdminPage />
            </Route>
            <Route path="/personelTable">
              <PersonelTable />
            </Route>
            <Route path="/sector">
              <Sector />
            </Route>
            <Route path="/tools">
              <Tools />
            </Route>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Redirect to="/not-found" />
          </Switch>
        </Container>
    </Container>
    // </AuthContext.Provider>

  );
}

export default App;
