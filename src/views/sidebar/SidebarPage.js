import React, {useState} from 'react'
import DrawerHook from '../drawer/Drawer'
import NavbarHook from '../navbar/NavbarHook'
import { useHistory } from "react-router-dom";
import LoginService from "../../services/LoginService";



const SidebarPage = () => {

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

export default SidebarPage
