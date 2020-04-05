import React, { Component } from 'react'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite';
import { Router, Link } from '@reach/router'
import * as APPACTIONS from '../actionTypes/AppActionTypes'
import ReactDOM from "react-dom";



export default class Menu extends Component {

  // constructor(){
  //     super()
  // }

  componentDidMount = () => {
    // const node = ReactDOM.findDOMNode(this);
  }

  // toggleDrawer = () => {

  //     var isOpen = this.props.isOpen
  //     if (!isOpen) {

  //         this.props.onOpenDrawer()
  //     }
  //     else {

  //         this.props.onCloseDrawer()
  //     }

  // }


  render() {
    // const classes =  this.props.useStyles()
    return (
      <Navbar>
        <Navbar.Header>
          <Icon icon="tasks" size="2x" />
          <a href="/" className="navbar-brand logo">Εργολήπτης</a>
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


          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />} >Ρυθμίσεις</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )

  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.drawrerOpen
  }
}

const mapDispatchToProps = dispatch => {

  return {
    // onFetchState: () => dispatch(APPACTIONS.fetchDrawerState()),
    // onOpenDrawer: () => dispatch(APPACTIONS.openDrawer()),
    //onCloseDrawer: () => dispatch(APPACTIONS.closeDrawer())
  }

}

// export default connect(mapStateToProps, mapDispatchToProps)(Menu)