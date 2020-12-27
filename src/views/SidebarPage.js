import React, { useState } from 'react'
import { Nav, Navbar, Sidenav, Sidebar, Icon, Dropdown, Drawer, } from 'rsuite'


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
  const [isClosed, setClose] = useState(false)

  const handleToggle = () => {
    setExpand(!expand)
    console.log(expand)
  }




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
            <Nav.Item>
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
            <Nav>
              <Nav.Item href="/" eventKey="1" active icon={<Icon icon="dashboard" />}>
                Αρχική
                    </Nav.Item>
              <Dropdown
                trigger="hover"
                eventKey="2"
                icon={<Icon icon="user-o" />}
                placement="rightStart"
                title="Χρήστες εφαρμογής">
                <Dropdown.Item>Προσθήκη χρήστη</Dropdown.Item>
                <Dropdown.Item>Πίνακας Χρηστών</Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="31"
                trigger="hover"
                title="Προσωπικό"
                icon={<Icon icon="vcard" />}
                placement="rightStart"
              >
                <Dropdown.Item href="/employeetab" eventKey="3-2">Προσθήκη εργαζομένου</Dropdown.Item>
                <Dropdown.Item href="/personelTable" eventKey="3-5">Πίνακας εργαζομένων</Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="3"
                trigger="hover"
                title="Έργο"
                icon={<Icon icon="weapp" />}
                placement="rightStart"
              >
                <Dropdown.Item href="/worktab" eventKey="3-1">Προσθήκη έργου</Dropdown.Item>
                <Dropdown.Item href="/worktab" eventKey="3-1">Πίνακας έργων</Dropdown.Item>
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
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
              </Dropdown>
            </Nav>


          </Sidenav>
          <Sidenav.Body>

          </Sidenav.Body>


        </Drawer.Body>
      </Drawer>

    </React.Fragment>

    // <Sidebar width={expand ? 260 : 56} >
    // <Sidenav expanded={expand}
    //   defaultOpenKeys={['3']}
    //   width={expand ? 260 : 50}
    //   style={{ height: '100vh' }}

    // >
    //   <Sidenav.Header>
    //     <div style={headerStyles}>
    //       <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
    //       <span style={{ marginLeft: 12 }}>Tracker</span>
    //     </div>
    //   </Sidenav.Header>

    //   <Sidenav.Body>

    //   </Sidenav.Body>
    //   <NavToggle expand={expand} onChange={handleToggle} />
    // </Sidenav>
    // </Sidebar>
  );

}

export default SidabarPage
