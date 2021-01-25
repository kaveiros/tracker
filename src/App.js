import React, { useState } from 'react';
import Main from './views/Main';
import 'rsuite/dist/styles/rsuite-default.css';
import { AuthContext } from '../src/context/Context'


function App() {


  const [isLoggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(true)
  }

  const logout = () => {
    setLoggedIn(false)
  }




  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Main />
    </AuthContext.Provider>

  );
}

export default App;
