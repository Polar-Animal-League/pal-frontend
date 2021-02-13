import React, {useState} from "react";
import {
  Link
} from "react-router-dom";


export const LoginTabComponent = function() : JSX.Element {
    return (
         <li className="navbar-item">
            <Link to="/login" >Login</Link>
        </li>
    )
}