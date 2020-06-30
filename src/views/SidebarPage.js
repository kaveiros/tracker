import React, { useState } from 'react'
import { Nav, Navbar, Sidenav, Sidebar, Icon, Dropdown, } from 'rsuite'


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const navBarHeight = {
  height: '100vh'
}

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const SidabarPage = () => {

  const [expand, setExpand] = useState(true)

  const handleToggle = () => {
    setExpand(!expand)
  }




  return (
    <Sidebar width={expand ? 260 : 56} >
      <Sidenav expanded={expand}
        defaultOpenKeys={['3']}
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        style={{ height: '100vh' }}

      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
            <span style={{ marginLeft: 12 }}> BRAND</span>
          </div>
        </Sidenav.Header>

        <Sidenav.Body>
          <Nav>
            <Nav.Item href="/dashboard" eventKey="1" active icon={<Icon icon="dashboard" />}>
              Αρχική
                    </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              User Group
                    </Nav.Item>
            <Dropdown
              eventKey="3"
              trigger="hover"
              title="Εφαρμογή"
              icon={<Icon icon="magic" />}
              placement="rightStart"
            >
              <Dropdown.Item href="/worktab" eventKey="3-1">έργο</Dropdown.Item>
              <Dropdown.Item href="/employeetab" eventKey="3-2">προσωπικό</Dropdown.Item>
              <Dropdown.Item href="/warehouse" eventKey="3-3">αποθήκη</Dropdown.Item>
              <Dropdown.Item href="/tools" eventKey="3-4">εργαλεία</Dropdown.Item>
              <Dropdown.Item href="/personelTable" eventKey="3-5">πινακας προσωπικό</Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="4"
              trigger="hover"
              title="Settings"
              icon={<Icon icon="gear-circle" />}
              placement="rightStart"
            >
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
              <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
        <NavToggle expand={expand} onChange={handleToggle} />
      </Sidenav>
    </Sidebar>
  );

}

export default SidabarPage
