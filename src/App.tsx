import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import {NavbarComponent} from "../src/Components/Navigation/NavbarComponent";
import {RegisterFormComponent} from "../src/Components/Registration/RegisterFormComponent";
import {fetchUser} from "../src/UserConnection/User"
import {UserContext} from "../src/Context/UserContext";
function App(): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [user, setUser] = useState(fetchUser())
  
  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <header className="mainHeader">
          <NavbarComponent id="nav-containerId" className="nav-container"/>
        </header>

        <div className="container">
          <LoginComponent/>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
