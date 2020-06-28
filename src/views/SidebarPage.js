import React, { useState} from 'react'
import {Nav, Navbar,Sidenav,Sidebar, Icon, Dropdown, } from 'rsuite'


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
  
  const SidabarPage = () =>  {

    const [expand, setExpand]  = useState(true)

    const handleToggle = () =>  {
      setExpand(!expand)
    }



    
      return (
            <Sidenav expanded={expand}
            defaultOpenKeys={['3']}
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidebar width={expand ? 260 : 56}>
              <Sidenav.Header>
                <div style={headerStyles}>
                  <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                  <span style={{ marginLeft: 12 }}> BRAND</span>
                </div>
              </Sidenav.Header>

                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                      Αρχική
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                      User Group
                    </Nav.Item>
                    <Dropdown
                      eventKey="3"
                      trigger="hover"
                      title="Advanced"
                      icon={<Icon icon="magic" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                      <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                      <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                      <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                      <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
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
              </Sidebar>
            </Sidenav>
      );
    
  }
  
export default SidabarPage
