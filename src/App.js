import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { AuthContext } from '../src/context/Context'
import { AuthHook } from '../src/hook/AuthHook'
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
import MaterialTab from '../src/views/Materials'
import NotFound from '../src/views/NotFound'
import AdminPage from '../src/views/admin/AdminPage'
import Sector from '../src/views/sector/Sector'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'



function App() {

  const { user, username, token, login, logout } = AuthHook()

  let routes

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
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
        <Route path="/404" exact>
          <NotFound />
        </Route>
        <Redirect from="*" to="/404"/>
      </Switch>
    )
  }
  else (
    routes = (
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  )


  return (
    <AuthContext.Provider value={{ user: user, username: username, token: token, login: login, logout: logout }}>
      <Container style={backgroundStyle}>
        <Router>
          <SidebarPage />
          <Container>
            <main>
              {routes}
            </main>
          </Container>
        </Router>
      </Container>
    </AuthContext.Provider>

  );
}

export default App;
