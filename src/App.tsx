import logo from './logo.svg';
import './App.css';
import React from "react"
import {NavbarComponent} from "../src/Components/Navigation/NavbarComponent";
import {RegisterFormComponent} from "../src/Components/Registration/RegisterFormComponent";

function App(): JSX.Element {
  return (
    <div className="app">
      <header className="mainHeader">
        <NavbarComponent id="nav-containerId" className="nav-container"/>
      </header>

      <div className="container">
        <RegisterFormComponent/>
      </div>
      
    </div>
  );
}

export default App;
