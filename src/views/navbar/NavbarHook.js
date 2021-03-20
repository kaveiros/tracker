import React from 'react' 
import { Nav, Navbar, Icon, } from 'rsuite'
import AvatarHook from '../avatar/AvatarHook'

const NavbarHook = ({handleToggle, logoutHandler}) => {

    return (
        <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Nav.Item onClick={handleToggle}>
              <Icon icon="bars" />
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item>
              <AvatarHook/>
            </Nav.Item>
            <Nav.Item >
              <Icon icon="bell-o" />
            </Nav.Item>
            <Nav.Item onClick={logoutHandler}>
              <Icon icon="sign-out" />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )

}

export default NavbarHook