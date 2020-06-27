import React, { Component } from 'react'
import { Header, Navbar, Nav, Icon, IconButton } from 'rsuite'

class HeaderPage extends Component {

    render() {
        return (
            <Header>
                <Navbar>
                    <Navbar.Header>
                        <IconButton icon={<Icon icon="align-justify" />} />
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav pullRight>
                            <Nav.Item icon={<Icon icon="cog" />}>Εγγραφή</Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>
        )
    }

}

export default HeaderPage