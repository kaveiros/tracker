import React, { useState, useCallback} from 'react';
import Main from './views/Main';
import 'rsuite/dist/styles/rsuite-default.css';
import { AuthContext } from '../src/context/Context'
import {AuthHook} from '../src/hook/AuthHook'


function App() {

  const {user, username, token, login, logout} = AuthHook()



  return (
    <AuthContext.Provider value={{ user: user, username:username, token: token, login: login, logout: logout }}>
      <Main />
    </AuthContext.Provider>

  );
}

export default App;
