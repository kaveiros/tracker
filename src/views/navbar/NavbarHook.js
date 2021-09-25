import React from 'react' 
import { Nav, Navbar } from 'rsuite'
import AvatarHook from '../avatar/AvatarHook'
import BarChartIcon from '@rsuite/icons/BarChart';
import NoticeIcon from '@rsuite/icons/Notice';
import ExitIcon from '@rsuite/icons/Exit';




const NavbarHook = ({handleToggle, logoutHandler}) => {

    return (
        <Navbar appearance="subtle" className="nav-toggle">
          <Nav>
            <Nav.Item onClick={handleToggle}>
              <BarChartIcon />
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item>
              <AvatarHook/>
            </Nav.Item>
            <Nav.Item >
              <NoticeIcon />
            </Nav.Item>
            <Nav.Item onClick={logoutHandler}>
              <ExitIcon />
            </Nav.Item>
          </Nav>
      </Navbar>
    )

}

export default NavbarHook
