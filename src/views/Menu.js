import React, { Component } from 'react'
import {Avatar, Navbar, Nav, Icon, Dropdown } from 'rsuite';
import * as LoginActions from '../actions/LoginActions'
import {connect} from 'react-redux'



class Menu extends Component {

  handle = () => {
    alert("Clicked")
  }

  logOff = () => {
    this.props.onLogOff()
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Icon icon="tasks" size="2x" />
          {/* <a href="/" className="navbar-brand logo">Εργολήπτης</a> */}
        </Navbar.Header>
        <Navbar.Body>
          <Nav>

            <Nav.Item href="/" icon={<Icon icon="area-chart" />}>Στατιστικά</Nav.Item>

            <Dropdown title="Καρτέλες έργου" icon={<Icon icon="file-text" />}>
              <Dropdown.Item href="/worktab" icon={<Icon icon="file-text" />}> Καρτέλα έργου 1</Dropdown.Item>
              <Dropdown.Item href="/worktab" icon={<Icon icon="file-text" />}> Καρτέλα έργου 2</Dropdown.Item>
            </Dropdown>
            <Nav.Item href="/employeetab" icon={<Icon icon="file-text" />}>Καρτέλα εργαζομένου</Nav.Item>
            <Nav.Item href="/tools" icon={<Icon icon="file-text" />}>Καρτέλα εξοπλισμού</Nav.Item>
            <Nav.Item href="/warehouse" icon={<Icon icon="file-text" />}>Καρτέλα αποθήκης</Nav.Item>
            <Nav.Item href="#" icon={<Icon icon="file-text" />}>Παρατηρήσεις</Nav.Item>
            <Nav.Item href="/personelTable" icon={<Icon icon="file-text" />}>Προσωπικο</Nav.Item>



          </Nav>
          <Nav pullRight> 
          <Avatar size="lg" onClick={this.handle}><Icon icon="cog"/></Avatar>
          <Nav.Item icon={<Icon icon="cog" />} onClick={(e)=>this.handle}>Ρυθμίσεις</Nav.Item>
            {/* <Avatar></Avatar>
            <Nav.Item icon={<Icon icon="cog" />} onSelect={(e)=>this.handleSelect(e)}>Ρυθμίσεις</Nav.Item>
            {/* <Nav.Item href="/logout" icon={ <Icon icon="sign-out"/>}>Έξοδος</Nav.Item> */}
            {/*<Nav.Item><Button size="lg" appearance="link" onClick={this.logOff}><Icon icon="sign-out"/></Button></Nav.Item> */}
          </Nav>
        </Navbar.Body>
      </Navbar>
    )

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOff: () => dispatch(LoginActions.destroyAuthentication())
  }
}

export default connect(null, mapDispatchToProps)(Menu)