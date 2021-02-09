import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/Context'
import DrawerHook from '../views/drawer/Drawer'
import NavbarHook from './navbar/NavbarHook'

const SidabarPage = () => {

  const [expand, setExpand] = useState(false)
  const authContext = useContext(AuthContext)


  const handleToggle = () => {
    setExpand(!expand)
  }

  const logoutHandler = () => {
    authContext.logout();
    // navigate('/')  
  };




  return (
    <React.Fragment>
      <NavbarHook handleToggle={handleToggle} expand={expand} logoutHandler={logoutHandler}/>
      <DrawerHook handleToggle={handleToggle} expand={expand} />
    </React.Fragment>
  );

}

export default SidabarPage
