import React, { useState } from 'react'
import DrawerHook from '../drawer/Drawer'
import NavbarHook from '../navbar/NavbarHook'
import LoginService from '../../services/LoginService'
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


  const token = LoginService.getCurrentUser()


  return (
      token ?
      <React.Fragment>
      <NavbarHook handleToggle={handleToggle} expand={expand} logoutHandler={logoutHandler}/>
      <DrawerHook handleToggle={handleToggle} expand={expand} />
    </React.Fragment>: null
  );

}

export default SidabarPage
