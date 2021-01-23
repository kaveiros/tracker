import React, { useState, useContext } from 'react'
import { Nav, Navbar, Sidenav, Sidebar, Icon, Dropdown, Drawer, } from 'rsuite'
import { AuthContext } from '../context/Context'
import { NavLink, Link } from 'react-router-dom';


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};




const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 50, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const SidabarPage = () => {

  const [expand, setExpand] = useState(false)
  const authContext = useContext(AuthContext)


  const handleToggle = () => {
    setExpand(!expand)
  }

  const logoutHandler = () => {
    authContext.logout();
    // navigate('/')  
  };




  return (
    <React.Fragment>
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Nav.Item onClick={handleToggle}>
              <Icon icon="bars" />
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item >
              <Icon icon="bell-o" />
            </Nav.Item>
            <Nav.Item onClick={logoutHandler}>
              <Icon icon="sign-out" />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
      <Drawer
        show={expand}
        backdrop={true}
        placement="left"
        size="xs"
        onHide={handleToggle}

      >
        <Drawer.Header>
          <div>
            <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
            <span style={{ marginLeft: 12 }}>Tracker</span>
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <Sidenav>

            <Sidenav.Body>
              {/* <ul className="rs-nav">
              <li className="rs-nav-item">
                <NavLink to="/employeetab" className="rs-nav-item-content"><Icon icon="dashboard" />Arxiki</NavLink>
              </li>
            </ul> */}
              <Nav>
                <Nav.Item componentClass="div" icon={<Icon icon="dashboard" />} onClick={handleToggle}>
                  <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/">Αρχική</Link>
                </Nav.Item>
                <Dropdown
                  eventKey="31"
                  trigger="hover"
                  title="Προσωπικό"
                  icon={<Icon icon="vcard" />}
                  placement="rightStart"
                >
                  <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/employeetab">Προσθήκη εργαζομένου</Link>
                  </Dropdown.Item>
                  <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/personelTable">Προσθήκη εργαζομένου</Link>
                  </Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Έργο"
                  icon={<Icon icon="weapp" />}
                  placement="rightStart"
                >
                  <Dropdown.Item componentClass="div" eventKey="3-1">
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/worktab">
                      Προσθήκη έργου
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item componentClass="div" eventKey="3-1">
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/worktab">
                      Πίνακας έργων
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="36"
                  trigger="hover"
                  title="Έργαλεία"
                  icon={<Icon icon="wrench" />}
                  placement="rightStart"
                >
                  <Dropdown.Item href="/tools" eventKey="3-4">Προσθήκη εργαλείου</Dropdown.Item>
                  <Dropdown.Item href="/tools" eventKey="3-4">Πίνακας εργαλειών</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="365"
                  trigger="hover"
                  title="Αποθήκη"
                  icon={<Icon icon="building" />}
                  placement="rightStart"
                >
                  <Dropdown.Item href="/warehouse" eventKey="3-3">Προσθήκη υλικών αποθήκης</Dropdown.Item>
                  <Dropdown.Item href="/materialsTab" eventKey="3-4">υλικά</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Ρυθμίσεις"
                  icon={<Icon icon="gear-circle" />}
                  placement="rightStart"
                >
                  <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/adminPage">
                      Διαχείριση
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item componentClass="div" onSelect={handleToggle}>
                    <Link className="rs-dropdown-item-content" style={{ textDecoration: 'none' }} to="/sector">Τομείς</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>

            </Sidenav.Body>
          </Sidenav>


        </Drawer.Body>
      </Drawer>

    </React.Fragment>
  );

}

export default SidabarPage
