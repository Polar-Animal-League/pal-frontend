import react, {useState} from "react" 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LogOrUserComponent } from "./LogOrUserComponent";

interface NavProps {
    id?: string,
    className?: string
}
export const NavbarComponent = function(props: NavProps) : JSX.Element {
    return (
         <Router>
            <div id={`navbar ${props.id}-div`} className={`navbar ${props.className}-div`}>
                <nav id={`navbar ${props.id}`} className={`navbar ${props.className}`}>
                    <ul>
                        <div>

                        </div>
                        <li className="navbar-item">
                            <img src="/images/icon-home.jpg" alt='Logo' />
                            <Link to="/">Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about">News</Link>
                        </li>
                         <li className="navbar-item ignore">
                            <img src="/images/header-logo-hover.jpg" id="navbar-logo"></img>
                        </li>

                        <li className="navbar-item">
                            <Link to="/users">Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users">Register</Link>
                        </li>

                         <div id="loginOrUserTab">
                             <LogOrUserComponent isLoggedIn={true}/>
                        </div>
                    </ul>
                </nav>
            </div>
        </Router> 
    )
}