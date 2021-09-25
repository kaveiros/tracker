import React, {useState} from 'react'
import DrawerHook from '../drawer/Drawer'
import NavbarHook from '../navbar/NavbarHook'
import { useHistory } from "react-router-dom";
import LoginService from "../../services/LoginService";



const SidebarPage = () => {

  const [open, setOpen] = useState(false)

  let history = useHistory();


  const handleToggle = () => {
    setOpen(!open)
  }

  const logoutHandler = () => {
    LoginService.signOut()
    history.push("/login")
  };


  return (

      <React.Fragment>
      <NavbarHook handleToggle={handleToggle} open={open} logoutHandler={logoutHandler}/>
      <DrawerHook handleToggle={handleToggle} open={open} />
    </React.Fragment>
  );

}

export default SidebarPage
