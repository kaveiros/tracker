import React, { useState } from 'react'
import DrawerHook from '../views/drawer/Drawer'
import NavbarHook from './navbar/NavbarHook'
import LoginService from '../services/LoginService'
import { useHistory } from "react-router-dom";


const SidabarPage = () => {

  const [expand, setExpand] = useState(false)
  let history = useHistory();

  const handleToggle = () => {
    setExpand(!expand)
  }

  const logoutHandler = () => {
    LoginService.signOut()
    history.push("/login")
  };




  return (
    <React.Fragment>
      <NavbarHook handleToggle={handleToggle} expand={expand} logoutHandler={logoutHandler}/>
      <DrawerHook handleToggle={handleToggle} expand={expand} />
    </React.Fragment>
  );

}

export default SidabarPage
